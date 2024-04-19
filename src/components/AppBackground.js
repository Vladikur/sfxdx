import * as React from 'react';
import ellipse1 from '../images/ellipse-1.svg';
import ellipse2 from '../images/ellipse-2.svg';
import ellipse3 from '../images/ellipse-3.svg';
import ellipse4 from '../images/ellipse-4.svg';

export default function AppBackground() {
  const image1 = React.useRef(null);
  const image2 = React.useRef(null);
  const image3 = React.useRef(null);
  const image4 = React.useRef(null);
  const parallaxOrigin = React.useRef(null);

  React.useEffect(() => {
    onLoad()
  }, []);

  const mouse = {
    x: 0,
    y: 0,
    ease: {
      x: 0,
      y: 0
    }
  };

  class MouseParallaxElemet {
    constructor(_el) {
      this.el = _el;
      this.depth = -4
    }

    update(_angle, _dist) {
      if(this.depth === 0) return;

      const r = _dist * 0.1 * this.depth;
      const x = (Math.cos(_angle) * r).toFixed(2);
      const y = (Math.sin(_angle) * r).toFixed(2);
      this.el.setAttribute('style', 'transform: translate(' + x + 'px, ' + y + 'px);');
    }
  }

  class MouseParallax {
    constructor() {
      this.el = parallaxOrigin.current;
      this.elements = [image1.current, image2.current, image3.current, image4.current].map(e => new MouseParallaxElemet(e));
    }

    update(_mouse) {
      const rect = this.el.getBoundingClientRect();
      const origin = {
        x: rect.left + rect.width * .5,
        y: rect.top + rect.height * .5
      };
      const mouseToOrigin = {
        x: _mouse.x - origin.x,
        y: _mouse.y - origin.y
      };
      const angle = Math.atan2(mouseToOrigin.y, mouseToOrigin.x);
      const dist = Math.sqrt((mouseToOrigin.x * mouseToOrigin.x) + (mouseToOrigin.y * mouseToOrigin.y));
      const clampedDist = Math.min(dist, 1000);

      for(const e of this.elements) {
        e.update(angle, dist);
      }
    }
  }

  const onLoad = () => {
    const parallax = new MouseParallax();

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const assumedFps = 60;
    const frameInterval = 1000 / assumedFps;
    let time = performance.now();
    let lastTime = time;
    let deltaTime = 0;

    const update = () => {
      const frame = requestAnimationFrame(update);

      lastTime = time;
      time = performance.now();
      deltaTime = time - lastTime;
      const spd = deltaTime / frameInterval;

      mouse.ease.x += (mouse.x - mouse.ease.x) * .02 * spd;
      mouse.ease.y += (mouse.y - mouse.ease.y) * .02 * spd;

      parallax.update(mouse.ease);
    };

    update();
  };

  return (
    <div className="app-background">
      <img ref={image1} src={ellipse1} alt="bg"/>
      <img ref={image2} src={ellipse2} alt="bg"/>
      <img ref={image3} src={ellipse3} alt="bg"/>
      <img ref={image4} src={ellipse4} alt="bg"/>
      <div ref={parallaxOrigin} className="app-background__parallax-origin"></div>
    </div>
  );
}
