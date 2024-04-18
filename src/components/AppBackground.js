import * as React from 'react';
import ellipse1 from '../images/ellipse-1.svg';
import ellipse2 from '../images/ellipse-2.svg';
import ellipse3 from '../images/ellipse-3.svg';
import ellipse4 from '../images/ellipse-4.svg';

export default function AppBackground() {
  return (
    <div className="app-background">
      <img src={ellipse1} alt="bg"/>
      <img src={ellipse2} alt="bg"/>
      <img src={ellipse3} alt="bg"/>
      <img src={ellipse4} alt="bg"/>
    </div>
  );
}
