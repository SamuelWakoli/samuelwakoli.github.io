import { useEffect, useRef } from "react";

const GLYPHS = "01<>[]{}+-=アイウエオカキクケコサシスセソ".split("");

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const parseColor = (value) => {
  const color = value.trim();

  if (color.startsWith("#")) {
    const hex = color.slice(1);
    const normalized =
      hex.length === 3
        ? hex
            .split("")
            .map((char) => char + char)
            .join("")
        : hex;

    if (normalized.length === 6) {
      return {
        r: Number.parseInt(normalized.slice(0, 2), 16),
        g: Number.parseInt(normalized.slice(2, 4), 16),
        b: Number.parseInt(normalized.slice(4, 6), 16),
      };
    }
  }

  const rgbMatch = color.match(/\d+/g);
  if (rgbMatch?.length >= 3) {
    return {
      r: Number.parseInt(rgbMatch[0], 10),
      g: Number.parseInt(rgbMatch[1], 10),
      b: Number.parseInt(rgbMatch[2], 10),
    };
  }

  return { r: 59, g: 130, b: 246 };
};

const withAlpha = (color, alpha) => {
  const { r, g, b } = parseColor(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const createStream = (lane, laneWidth, height, rowHeight, isCompact) => {
  const length = Math.floor(
    (isCompact ? 6 : 8) + Math.random() * (isCompact ? 5 : 6),
  );

  return {
    x: lane * laneWidth + laneWidth * (0.3 + Math.random() * 0.4),
    y: Math.random() * (height + 320) - 240,
    speed: (isCompact ? 9 : 11) + Math.random() * (isCompact ? 6 : 8),
    drift: (Math.random() - 0.5) * 3.2,
    length,
    glyphs: Array.from({ length }, randomGlyph),
    shimmer: Math.random() * Math.PI * 2,
  };
};

const readPalette = () => {
  const styles = getComputedStyle(document.documentElement);
  return {
    accent: styles.getPropertyValue("--accent").trim() || "#3b82f6",
    secondary:
      styles.getPropertyValue("--accent-secondary").trim() || "#8b5cf6",
    isDark: document.documentElement.dataset.theme === "dark",
  };
};

export const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return undefined;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let prefersReduced = reducedMotionQuery.matches;
    let palette = readPalette();
    let streams = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastTime = performance.now();
    let lastScrollY = window.scrollY;
    let scrollBias = 0;
    let scrollDrift = 0;

    const setupCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.textBaseline = "middle";
      context.textAlign = "center";

      const isCompact = width < 768;
      const laneWidth = isCompact ? 44 : 54;
      const laneCount = Math.max(10, Math.ceil(width / laneWidth));
      const streamCount = Math.round(laneCount * (isCompact ? 1.65 : 1.95));
      const rowHeight = isCompact ? 18 : 20;

      streams = Array.from({ length: streamCount }, (_, index) =>
        createStream(
          index % laneCount + (Math.random() - 0.5) * 0.45,
          laneWidth,
          height,
          rowHeight,
          isCompact,
        ),
      );
    };

    const drawFrame = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (!prefersReduced) {
        scrollBias *= 0.92;
        scrollDrift += (scrollBias - scrollDrift) * 0.08;
      }

      context.clearRect(0, 0, width, height);

      const isCompact = width < 768;
      const fontSize = isCompact ? 12 : 14;
      const rowHeight = isCompact ? 18 : 20;
      const tailAlpha = palette.isDark ? 0.085 : 0.04;
      const headAlpha = palette.isDark ? 0.24 : 0.11;

      context.font = `500 ${fontSize}px "Outfit", "Inter", sans-serif`;

      streams.forEach((stream, index) => {
        const bias = prefersReduced
          ? 0
          : scrollBias * (0.1 + (index % 3) * 0.04);
        stream.y += (stream.speed + bias) * delta;
        stream.x += Math.sin(time / 2200 + stream.shimmer) * 0.012;

        const streamHeight = stream.length * rowHeight;

        if (stream.y - streamHeight > height + 40) {
          const laneWidth = isCompact ? 44 : 54;
          const laneCount = Math.max(10, Math.ceil(width / laneWidth));
          Object.assign(
            stream,
            createStream(
              index % laneCount + (Math.random() - 0.5) * 0.45,
              laneWidth,
              height,
              rowHeight,
              isCompact,
            ),
            { y: -Math.random() * 220 },
          );
        }

        for (let step = 0; step < stream.length; step += 1) {
          const y = stream.y - step * rowHeight + scrollDrift * 0.45;
          if (y < -40 || y > height + 40) continue;

          if (Math.random() > 0.985) {
            stream.glyphs[step] = randomGlyph();
          }

          const progress = 1 - step / stream.length;
          const alpha = step === 0 ? headAlpha : tailAlpha * progress * progress;

          context.fillStyle = withAlpha(
            step === 0
              ? palette.accent
              : step % 2 === 0
                ? palette.accent
                : palette.secondary,
            step === 0 ? 1 : 0.78 - step / (stream.length * 1.5),
          );
          context.globalAlpha = alpha;
          context.fillText(stream.glyphs[step], stream.x + stream.drift, y);
        }
      });

      context.globalAlpha = 1;

      if (!prefersReduced) {
        animationFrame = window.requestAnimationFrame(drawFrame);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(animationFrame);
      setupCanvas();
      palette = readPalette();
      context.clearRect(0, 0, width, height);
      lastTime = performance.now();
      lastScrollY = window.scrollY;
      scrollBias = 0;
      scrollDrift = 0;

      if (prefersReduced) {
        drawFrame(lastTime);
        return;
      }

      animationFrame = window.requestAnimationFrame(drawFrame);
    };

    const handleResize = () => start();

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const delta = nextScrollY - lastScrollY;
      lastScrollY = nextScrollY;
      scrollBias = clamp(scrollBias + delta * 0.08, -14, 14);
    };

    const handleMotionPreferenceChange = ({ matches }) => {
      prefersReduced = matches;
      start();
    };

    const themeObserver = new MutationObserver(() => {
      palette = readPalette();
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);

    start();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div aria-hidden="true" className="matrix-background">
      <canvas ref={canvasRef} />
    </div>
  );
};
