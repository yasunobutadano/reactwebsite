import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';


// ReactPlayerを動的に読み込む
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Animation: React.FC = () => {
  useEffect(() => {
    const jsTextItems = document.querySelectorAll('.js-mv_title-item');
    jsTextItems.forEach(target => {
      let newText = '';
      const text = target.textContent || '';
      const result = text.split('');
      for (let i = 0; i < result.length; i++) {
        newText += '<span>' + result[i] + '</span>';
      }
      target.innerHTML = newText;
    });

    const jsLoaderBg = '.js-loader-bg';
    const jsDot = '.c-loader-dot > span';
    const jsBubble = '.js-mv-bubble [id*=item]';
    const jsText = '.js-mv_title-item span';
    const jsLeadText = '.js-mv_title-lead';
    const jsHeader = '.js-header';
    const jsVideo = '.js-video';

    // 初期状態をセット
    gsap.set(
      [jsBubble, jsText, jsLeadText, jsVideo],
      {
        opacity: 0,
        y: 30
      },
    );

    // ドット
    gsap.set(jsDot, {
      opacity: 0,
      y: -50
    });

    // ヘッダー
    gsap.set(jsHeader, {
      opacity: 0,
      y: -50
    });

    // timelineを作成
    const tl = gsap.timeline();

    tl.to(jsDot, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.8,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: 'power4.inOut'
      }
    }).to(jsDot, {
      opacity: 0
    }).to(jsLoaderBg, {
      y: '100%'
    }, '+=0.5').to(jsBubble, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        from: "start",
        ease: "sine.in"
      }
    }, '+=0.2').to([jsText, jsVideo], {
      opacity: 1,
      y: 0,
      stagger: {
        amount: 1,
        from: "start",
        ease: "sine.in"
      }
    }, "-=0.1").to(jsLeadText, {
      opacity: 1,
      y: 0,
    }, "-=0.2").to(jsHeader, {
      opacity: 1,
      y: 0,
    }, '<');
  }, []);

  return (
    <>
      <div className="c-loader-bg js-loader-bg">
        <div className="c-loader-dot">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="align-top text-center ">
              <header className="js-header">Weocmome to my page!!!!

              </header>
              <h1 className="js-mv_title-item">Creating a mechanism to change the world</h1>
             <div className="js-mv_title-lead">Your Lead Text Here</div>
        </div>
      </div>

      <Row className="">
          <Col md={4} className="mt-5 pt-5 ">
            <div className="video-wrapper">
              <div className="js-video">
                <ReactPlayer className="react-player rounded-3 " url="https://youtu.be/X9uDppB-ywc?si=PGPgNxsWu3EvY5y6" width="100%" />
              </div>
              
            </div>
          </Col>
　　　　</Row>

      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1324 768" className="js-mv-bubble">
        <defs>
          <style>
            {`.cls-1 {
              fill: url(#名称未設定グラデーション);
            }
         
            .cls-2 {
              fill: url(#名称未設定グラデーション_2);
            }
         
            .cls-3 {
              fill: url(#名称未設定グラデーション_3);
            }
         
            .cls-4 {
              fill: url(#名称未設定グラデーション_4);
            }
         
            .cls-5 {
              fill: url(#名称未設定グラデーション_5);
            }
         
            .cls-6 {
              fill: url(#名称未設定グラデーション_6);
            }
         
            .cls-7 {
              fill: url(#名称未設定グラデーション_7);
            }
         
            .cls-8 {
              fill: none;
            }
         
            .cls-9 {
              fill: url(#名称未設定グラデーション_8);
            }
         
            .cls-10 {
              fill: url(#名称未設定グラデーション_9);
            }
         
            .cls-11 {
              fill: url(#名称未設定グラデーション_10);
            }
         
            .cls-12 {
              fill: url(#名称未設定グラデーション_11);
            }
         
            .cls-13 {
              fill: url(#名称未設定グラデーション_12);
            }
         
            .cls-14 {
              fill: url(#名称未設定グラデーション_13);
            }`}
          </style>
          <linearGradient id="名称未設定グラデーション" y1="496.5" x2="121" y2="496.5"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9796f0" />
            <stop offset="1" stopColor="#fbc7d4" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_2" x1="619" y1="576.5" x2="702" y2="576.5"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ddd6f3" />
            <stop offset="1" stopColor="#faaca8" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_3" x1="1166" y1="317" x2="1324" y2="317"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6190e8" />
            <stop offset="1" stopColor="#a7bfe8" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_4" x1="981" y1="549" x2="1051" y2="549"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#feac5e" />
            <stop offset="0.5" stopColor="#c779d0" />
            <stop offset="1" stopColor="#4bc0c8" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_5" x1="753" y1="495" x2="903" y2="495"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fbed96" />
            <stop offset="1" stopColor="#abecd6" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_6" x1="704" y1="219.5" x2="845" y2="219.5"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffefba" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_7" x1="965" y1="349" x2="1081" y2="349"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#dbe6f6" />
            <stop offset="1" stopColor="#c5796d" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_8" x1="169" y1="193.5" x2="382" y2="193.5"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#7f7fd5" />
            <stop offset="0.5" stopColor="#86a8e7" />
            <stop offset="1" stopColor="#91eae4" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_9" x1="476" y1="290" x2="580" y2="290"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#efefbb" />
            <stop offset="1" stopColor="#d4d3dd" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_10" x1="355" y1="654.5" x2="518" y2="654.5"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c9d6ff" />
            <stop offset="1" stopColor="#e2e2e2" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_11" x1="169" y1="696.5" x2="254" y2="696.5"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d9a7c7" />
            <stop offset="1" stopColor="#fffcdc" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_12" x1="1039" y1="725.5" x2="1124" y2="725.5"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c9ffbf" />
            <stop offset="1" stopColor="#ffafbd" />
          </linearGradient>
          <linearGradient id="名称未設定グラデーション_13" x1="907" y1="87" x2="1081" y2="87"
            gradientTransform="matrix(1, 0, 0, -1, 0, 768)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e1eec3" />
            <stop offset="1" stopColor="#f05053" />
          </linearGradient>
        </defs>
        <g id="item14">
          <circle className="cls-1" cx="60.5" cy="271.5" r="60.5" />
        </g>
        <g id="item13">
          <circle className="cls-2" cx="660.5" cy="191.5" r="41.5" />
        </g>
        <g id="item12">
          <circle className="cls-3" cx="1245" cy="451" r="79" />
        </g>
        <g id="item11">
          <circle className="cls-4" cx="1016" cy="219" r="35" />
        </g>
        <g id="item10">
          <circle className="cls-5" cx="828" cy="273" r="75" />
        </g>
        <g id="item09">
          <circle className="cls-6" cx="774.5" cy="548.5" r="70.5" />
        </g>
        <g id="item08">
          <circle className="cls-7" cx="1023" cy="419" r="58" />
        </g>
        <g id="item07">
          <circle className="cls-8" cx="994" cy="681" r="87" />
        </g>
        <g id="item06">
          <circle className="cls-9" cx="275.5" cy="574.5" r="106.5" />
        </g>
        <g id="item05">
          <circle className="cls-10" cx="528" cy="478" r="52" />
        </g>
        <g id="item04">
          <circle className="cls-11" cx="436.5" cy="113.5" r="81.5" />
        </g>
        <g id="item03">
          <circle className="cls-12" cx="211.5" cy="71.5" r="42.5" />
        </g>
        <g id="item02">
          <circle className="cls-13" cx="1081.5" cy="42.5" r="42.5" />
        </g>
        <g id="item01">
          <path className="cls-14" d="M1081,681a87,87,0,1,1-87-87A87,87,0,0,1,1081,681Z" />
        </g>
      </svg>

      <style jsx>{`
        .content-wrapper {
  position: relative;
  z-index: 1;
  margin-top: 20px;
  color: black;
}

.js-mv-bubble {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.js-header,
.js-mv_title-item,
.js-mv_title-lead {
  position: relative;
  z-index: 2;
}

.video-wrapper {
  position: absolute;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 600px; /* 必要に応じて調整 */
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}

      `}</style>
    </>
  );
};

export default Animation;
