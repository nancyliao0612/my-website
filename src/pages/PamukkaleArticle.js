import React, { useContext } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import ScrollButton from "../components/ScrollButton";
import { AiOutlineLike } from "react-icons/ai";
import useLikeButton from "../useLikeButton";
import { ThemeContext } from "../context/ThemeContext";

const PamukkaleArticle = () => {
  const { likes, handleLikeClick } = useLikeButton("PamukkaleArticle");
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme ? "darkContent" : "lightContent"}>
      <div>
        <ScrollButton />
        <img
          src="https://i.imgur.com/i17Ordm.jpg"
          alt="pamukkale"
          className="istanbul-pic article-pic"
        />
        <h2 className="article-title">
          ãè¶´è¶´èµ°ð£ãå¬å­£è¨ªéªç½æ£å ¡ï¼Pamukkaleï¼
        </h2>
        <div className="DB-center">
          <div className="summary-container">
            <div className="date-summary">
              &nbsp;
              <IoTimeOutline className="total-icons" />
              &nbsp;2021/11/21ï¼æ¥ï¼â 11/22ï¼ä¸ï¼
            </div>
          </div>
          <br />
          <p>è·é¢ä¸æ¬¡ç¨æï¼å¤§æ¦ç¸éä¸å¹´åä¹ä¹ï¼ </p>
          <p>æéä¹å°æç«ç¶å§å¿ææå°ä¸å®... </p>
          <br />
          <br />
          <p>
            åæ¨ä¸é»èµ·åºï¼ééå°èªå·±æ¢³æ´æçä¸çªï¼ä¸¦å°å©å¤©ä¸å¤çè¡åæåå¥½ã
          </p>
          <p>
            ä¸åæºåå°±ç·å¾ï¼æéçè¦½å°åéä»ç´°å¨è¦ä¸­æ¼ç·´å¾å®¶è£¡å°æ©å ´çè½ä¹è·¯ç·ï¼çèçªå¤å¯éæ¼é»çä¸çï¼å¿è£¡æ´å æå°å¿å¿ä¸å®ï¼å çºå¨éå¤§åå¤çæåï¼æè¦å¾äºæ´²åæ©«è·¨
            60 å¬éå°æ­æ´²åçä¼æ¯å¦å ¡æ©å ´ï¼ISTï¼ðã
          </p>
          <p>
            ä¼æ¯å¦å ¡çäº¤éççæ¯«ç¡è¦åå¯å¾ªï¼google map
            é¡¯ç¤ºçå¬è»å°ç«æéç¸ç¶ä¸æºç¢ºï¼ç¶å°ä¹æ²æé¡ä¼¼å°ç£çãBus+ãå°åç­å¬è»ãéäº
            app
            å¯ä»¥å³ææ¥è©¢å°ç«æéï¼åªè¦éä¸­ç¨æä¸åç°ç¯åºé¯ï¼æå¾å¯è½å°±æé¯éç»æ©æéï¼åä¸å£æ°£ï¼ã
          </p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h2>ä¼æ¯å¦å ¡æ©å ´æ¥é§å·´å£« havaist</h2>
          <p></p>
          <div>
            <h5>
              ç¥¨å¹æ¥è©¢ï¼è¨ç¥¨ ð{" "}
              <a href="https://hava.ist/en" target="_blank" className="DB-link">
                havaist å®æ¹ç¶²ç«
              </a>
            </h5>
            <ul className="text-bullet smallSize">
              <li>
                ç·ä¸ä»æ¬¾éãææ© 6 å°æãè¨ç¥¨ï¼ä»æ¬¾æåå¾æå¯é QR-Code
                å°ä½ çä¿¡ç®±ï¼ä¸è»åºç¤ºæ¢ç¢¼çµ¦è»é·ææå³å¯ï¼
              </li>
              <li>
                ä¸è¬ä¾èªªï¼ä½ ä¹å¯ä»¥å¨è³¼ç¥¨äº­ä»ç¾è²·ç¥¨ï¼ä½å¦æä½ è·æä¸æ¨£å¤§åå¤çè¦æ­æ¥é§å·´å£«ï¼é£å°±åªè½ç·ä¸ä»æ¬¾äºï½
              </li>
            </ul>
            <br />
            <h5>
              æå»è¡¨ ð
              <a
                href="https://www.istairport.com/en/passenger/transport/airport-transfers/havaist"
                target="_blank"
                className="DB-link"
              >
                Istanbul Airport å®æ¹ç¶²ç«
              </a>
            </h5>
            <ul className="text-bullet smallSize">
              <li>
                å æç«æï¼è©²æå»è¡¨å¯è½ææè®åï¼åºç¼åå¯ä»¥åå° IST
                æ©å ´çå®æ¹ç¶²ç«ç¢ºèª
              </li>
            </ul>
            <h5>
              æ­ä¹å°é» ð
              <a
                href="https://hava.ist/en/Voyage/WhereMyBus"
                target="_blank"
                className="DB-link"
              >
                havaist å®æ¹ç¶²ç«
              </a>
            </h5>
            <ul className="text-bullet smallSize">
              <li>æ¥è©¢é¢èªå·±ä½å®¿å°é»æè¿çå·´å£«ç«ï¼éæä¾ä½ é è¨æ­ä¹çæé</li>
              <li>
                å¦æéä¸å°å³°ææ®µï¼å»ºè­°æéå¯ä»¥åæä¿å®ä¸é»ï½ä¼æ¯å¦å ¡çäº¤éæ¯æ²æè¦åçï¼åèº«é«æ
                QQ
              </li>
            </ul>
          </div>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>{" "}
          <img src="https://i.imgur.com/dssVcgs.jpg" alt="airport" />
          <p className="imgCaption">æ­åè³å¶èªç©ºä¾åæ©ç¥¨å± $2100 å°å¹£ð¥³</p>{" "}
          <br />
          <p>è¬å¤©è¬å°ï¼ææ²æé­éå¤ªå¤é©é­ï¼æ¸æ¨ 6 é»é å©å°æµéæ©å ´ã</p>
          <p>ç­ç­é£è¡ 45 åéå¾ï¼é£æ©å°±éè½å¨ä¸¹å°¼æ¯å©å¡ç¾éåæ©å ´ï¼DNZï¼ã</p>
          <br />
          <p>
            ä¸åºæ©å ´å¾ï¼å°±å¯ä»¥çå°åå¾å¸åçæ¥é§å·´å£«ï¼ç¥¨å¹ 25 éæï¼ç´ 1
            å°æå·¦å³å°±å¯ä»¥æµéå¸åï½
          </p>
          <br />
          <img src="https://i.imgur.com/w2DDJbP.jpg" alt="DNZ-airport" />
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h2>ä»¥å¬éçºè±¡å¾µçä¸¹å°¼æ¯å©ï¼Denizliï¼</h2>
          <p>
            ä¸¹å°¼æ¯å©ï¼Denizliï¼æ¯åäººå£&nbsp;
            <a
              href="https://populationstat.com/turkey/denizli"
              target="_blank"
              className="DB-link"
            >
              66 è¬
            </a>
            &nbsp;çå°åå¸ï¼ç¸è¼&nbsp;
            <a
              href="https://worldpopulationreview.com/world-cities/istanbul-population"
              target="_blank"
              className="DB-link"
            >
              1,540 è¬
            </a>
            &nbsp;äººå£çä¼æ¯å¦å ¡ï¼ä¾å°ééå°±å¥½æ¯é é¢å§åãåæ­¸éè¬ï¼è¡éå©æé¨èå¯è¦è¡éæ¨¹ç­æ¤æ ½ï¼èµ°å¨ä¸¹å°¼æ¯å©çè¡ä¸ççå°±åªæãèæãå©åå­ï½
          </p>
          <p>
            éå·²æ¥è¿ 11 æåºï¼ç¶å°ç½å¤©æ°£æº«å¨ 18
            åº¦å·¦å³ï¼å¬æ¥åç¦çé½åçå¨èº«ä¸ï¼èµ°ä¹äºçè³æç±å°æ³æå¤å¥è«æã
          </p>
          <br />
          <p>
            è Denizli
            å¶å¯¦æ¯åè³å¶ç¹æçéç¨®ðï¼è©²åç¨®éä»¥å¶é¡è²ãèº«å½¢èåªç¾çå¼å«è²èåï¼æ­¤å¤ï¼è©²éç¨®ç¸è¼å¶ä»åç¨®ï¼æ´è½æµç¦¦ç¾çãä¸¹å°¼æ¯å©å¬éï¼Turkish
            Denizli Roosterï¼æèæ´»èºçå¤è¡¨ â
            åå¯¦çè¸èãæºé·æåçèå­ãä¿®é·çéè¿ä»¥åä¿éºçå°¾å·´ã
          </p>
          <br />
          <div className="img-double">
            <img
              className="style-2"
              src="https://i.imgur.com/25lEPo7.jpg"
              alt="rooster"
            />
            <img
              className="style-2"
              src="https://i.imgur.com/uhJDjO7.jpg"
              alt=""
            />
          </div>
          <br />
          <div className="img-double">
            <img
              className="style-2"
              src="https://i.imgur.com/1BlbVcL.jpg"
              alt="rooster"
            />
            <img
              className="style-2"
              src="https://i.imgur.com/AqCm2wC.jpg"
              alt=""
            />
          </div>
          <br />
          <p>ç±æ¼æéåè£ï¼å¨åºç¼åå¾æ£å ¡åï¼æåå¥ä½æé¤¨ï¼å°è¡æå®ç½®å¥½ã</p>
          <br />
          <p>
            éæ¼ä¸¹å°¼æ¯å©çä½å®¿ï¼ççè¦å¤§æ¨éé
            <a
              href="https://www.expedia.com/Denizli-Hotels-Piskin-Otel.h33289431.Hotel-Information?langid=1033&EMLCID=US.PT.EVENTTRIGGEREDMAILING.ENSPURCHASECONFIRMATION.HOTEL&EMLDTL=DATE20211120-ISSUX.SIDX.KEY95257239704.PAIDX.LANGEN_US.MCIDX.TEST20.VERSX.MIDS1-56517_2-121521_3-113775_4-134782_5-124276_6-138317_7-121763_8-108290.MOD2212-64-1-0-EMAIL-BANNER-EN-US_S3-P15_POS0_IMG1662&rfrr=AB.5037.1"
              target="_blank"
              className="DB-link"
            >
              Piskin Otel
            </a>
            ï¼ä½æ¼ä¾¿å©çå¸ä¸­å¿ï¼é¢å¬è»ç¸½ç«ç´ 1.5
            å¬éï¼æ¯ç¸ç¶çèçè·é¢ï¼å¯ä»¥ä¸è·¯è¼é¬å°æ£æ­¥éå»ã
          </p>
          <p>
            å¹æ ¼ä¹å¾è¦ªæ°ï¼ä¸åæä¸
            200éæï¼åå«èªå©å¼æ©é¤ï¼ï¼ç§ç¶æå¯çæç®å°å¹£ç´ $500ã
          </p>
          <br />
          <img src="https://i.imgur.com/1YcvUP4.jpg" alt="Piskin Otel" />
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h2>åç¨åå¾æ£å ¡ï¼Pamukkaleï¼</h2>
          <h5>äº¤éï¼</h5>
          <div>
            <ul className="text-bullet">
              <li>
                èµ·é»ï¼
                <a
                  href="https://www.google.com.tr/maps/place/Denizli+%C5%9Eehirler+aras%C4%B1+Otob%C3%BCs+Terminali/@37.7852203,29.0914217,13z/data=!4m5!3m4!1s0x14c73fb5238ca73b:0x159421cb8e9bdbd4!8m2!3d37.7851832!4d29.0910776?hl=zh-TW&shorturl=1"
                  target="_blank"
                  className="DB-link"
                >
                  Denizli Åehirler arasÄ± OtobÃ¼s Terminali
                </a>
                <ul className="text-bullet">
                  <li>
                    æµé Denizli å¬è»ç¸½ç«å¾ï¼æ­ææ¶æ¢¯ä¸å°å°ä¸ä¸æ¨ï¼å°±å¯ä»¥æ¾å° 76
                    èå°å·´å£«ã
                  </li>
                </ul>
              </li>
              <li>
                å°å·´ï¼Turkish: Dolmusï¼ï¼
                <ul className="text-bullet">
                  <li>è³è¨ï¼No. 76 æ¯ 15-20 åéä¸ç­ï¼æ¯ç­å¯å®¹ç´ 20 äººå·¦å³</li>
                  <li>ç¥¨å¹ï¼$5 éæ</li>
                  <li>è·¯ç¨ï¼20 åéï¼18å¬éï¼</li>
                </ul>
                <li>çµé»ï¼æ£å ¡æå¥å£ï¼é è¿é´¨å­æ± ï¼</li>
              </li>
            </ul>
            <br />
          </div>
          <img src="https://i.imgur.com/i17Ordm.jpg" alt="Pamukkale" />
          <br />
          <p>
            Pamukkale æ¯ç±å©ååè³å¶æçµæï¼pamuk ææãæ£ãï¼kale
            æçæ¯ãç¢å ¡ãï¼å æ­¤ Pamukkale ååãæ£è±å ¡ããæ£å ¡åº§è½æ¼ Hierapolis
            å¸ææ³¢å©æ¯å¤åçåæ¹ï¼æ¯ç±å¯å«ç¢³é¸é£çæ°´æº¢æµå¨å±±å¡ä¸æå½¢æçççæ¢¯å°ã
          </p>
          <br />
          <p>
            æ£å ¡ç³ç°æ£ï¼Pamukkale Travertineï¼æéæ¾æ°¡æ°£ï¼radon
            gasï¼ï¼è©²æ°£é«å°äººé«è½éå°èç·©ççæï¼å èæ£å ¡ç³ç°æ£çæº«æ³ä¹è¢«å¤æäººåç¨æ¼æ²»çç¾çã
          </p>
          <br />
          <p>
            æ£è±å ¡å±æä¸åè·¯å£ â
            åéãåéãæ£è±æå¥å£ï¼å¦ææ¯æ­ä¹å¬è»çè©±ï¼å¬è»æåå¨ææ¥è¿æµ·æè¼ä½çæ£è±æå¥å£ï¼éå®¢éè¦ä¸è·¯æ²¿èæå¡åä¸èµ°ã
          </p>
          <p>
            å¤©æ°£å¥½çè©±ï¼å»ºè­°å¯ä»¥å¨æ£å ¡çæ¥è½ï¼å¯ä»¥é¸å¨ä¸å 2 é»å·¦å³å¥åï¼è± 3-4
            å°ææ éå°æ¬£è³æ£å ¡çæ¯è²ï¼ä¸¦åè§å¸ææ³¢å©æ¯éºåã
          </p>
          <br />
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>{" "}
          <br />
          <h3>æ£å ¡ç¥¨å¹ï¼éæ¾æé</h3>
          <div>
            <h5>ååéæ¾æéï¼å¨å¹´ç¡ä¼ï¼ï¼</h5>
            <ul className="text-bullet smallSize">
              <li>å¤å­£ï¼4/1-10/1ï¼ï¼06:30 - 20:00 </li>
              <li>å¬å­£ï¼10/1-4/1ï¼ï¼08:00 - 18:00 </li>
            </ul>
            <h5>å æ COVID-19 æ³¨æäºé ï¼</h5>
            <ul className="text-bullet smallSize">
              <li>éæ¾æéï¼10:00 - 19:00 </li>
              <li>éæ´å£ç½©ãä¿æç¤¾äº¤è·é¢ãå¥åéé«æº« </li>
            </ul>
            <h5>å¥åè²»ï¼</h5>
            <ul className="text-bullet smallSize">
              <li>
                æ£å ¡ + ååå§èå¤åç©é¤¨å¥ç¥¨ï¼ç¸½è¨ 110 éæï¼ä¾ç¶æå¯çæç®å°å¹£
                275ï¼ä¹å¯ä»¥æ¯ä» 11 æ­åæ 12 ç¾éï¼
              </li>
            </ul>
            <br />
            <h3>æ£è±å ¡å°å</h3>
            <img src="https://i.imgur.com/nyC7OJG.jpg" alt="pamukkale-map" />
          </div>
          <br />
          <div className="img-double">
            <img
              className="style-2"
              src="https://i.imgur.com/2HJLuSN.jpg"
              alt="landscape"
            />
            <img
              className="style-2"
              src="https://i.imgur.com/XJZ87UU.jpg"
              alt="ticket"
            />
          </div>
          <br />
          <img
            src="https://i.imgur.com/NB8EXZ5.jpg"
            alt="pamukkale-travertine"
          />
          <p>æ£å ¡å±¤å±¤å ççç³ç°å²©å°å½¢æ¯ç±å«é£æº«æ³æ°´é·æçæ²æ¾±</p>
          <br />
          <img
            src="https://i.imgur.com/Qg54XsI.jpg"
            alt="pamukkale-travertine"
          />
          <p>ä¾ååè¦å®ï¼éå®¢å¿é ãèµ¤è³ãè¸ä¸ç³ç°æ£ï¼å»ºè­°èªåå¡è è¢è£éè¥ªã</p>
          <p>
            ç¬¬ä¸è³è¸©ä¸å»æ²æææ³åä¸­çé£éº¼å¯å·åºéª¨ï¼ä½è¸©å°å¯éå¹å¸ä¸å¹³çç´è·¯ççæ¯æçå°ç´æ¥å«åºè²ï¼ï¼ä½æ³æèªå·±å¨åè¶³åºç©´éææ©ï¼è½å¤ ä¿é²è¡æ¶²å¾ªç°å¯è½å¿è£¡æå¥½åä¸äº
            XD
          </p>
          <br />
          <img
            src="https://i.imgur.com/bPdLCUX.jpg"
            alt="pamukkale-travertine"
          />
          <p>
            æ£å ¡åå¸ææ³¢å©æ¯æ¼ 1988 å¹´è¢«è¯ååæç§æçµç¹åçºä¸çéºç¢ï¼
            UNESCOÂ World Heritage Sites ï¼
          </p>
          <br />
          <div class="img-double">
            <img
              src="https://i.imgur.com/PllzrSk.jpg"
              alt=""
              className="style-1"
            />
            <img
              src="https://i.imgur.com/IoAsKfF.jpg"
              alt=""
              className="style-1"
            />
          </div>
          <br />
          <p>å¤é½æ å¨ç³ç°æ£çæ± æ°´ä¸ï¼éè¬ç¾è¼ªç¾å¥çæ¯è²åè¬å¥é¯éäºï¼</p>
          <br />
          <img src="https://i.imgur.com/sH7ck8U.jpg" alt="theatre" />
          <br />
          <p>
            å¸ææ³¢å©æ¯å¤åï¼Hierapolis Ancient Cityï¼æ¼è¥¿åå 190
            å¹´ç±å¸å ç¢¼çåæ­éå°¼æ¯äºä¸ï¼Bergama King Eumenes
            IIï¼æå»ºç«ãè©²åå¸å¨ç¾é¦¬çå¸å¡æç±³çæ¯Â·å¡ç¶­é­¯æ¯ï¼Septemius
            Severusï¼ççµ±æ²»ä¸æ­·ç¶è¼çæä»£ï¼è¥¿å 2-3
            ä¸ç´ï¼ï¼ä¸¦æçºç¾é¦¬å¸åä¸æµç¤¾æäººå£«æ¼å¤å­£é è¨ªçæ¸¡åèå°ã
          </p>
          <br />
          <p>
            ç¾ä»ï¼æåå¯ä»¥è§è³å°å¸ææ³¢å©æ¯å¤åéºåï¼åå«æµ´å ´ãå¢å°ãç³æ±é·å»ãæå ãé«è²å ´åç«¶æå ´ç­ï¼ä¸é£æ³ååå¹´åå¨ç¾é¦¬å¸åçµ±æ²»ä¸çææ¥æ¦®æ¯ã
          </p>
          <br />
          <div class="img-double">
            <img
              src="https://i.imgur.com/WCtPQ4Z.jpg"
              alt="latrina"
              className="style-2"
            />
            <img
              src="https://i.imgur.com/XqKthV3.jpg"
              alt="necropolises"
              className="style-2"
            />
          </div>
          <br />
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h2>å¾è¨</h2>
          <p>
            ç¶æææ æ å°å¨æ¨æ¿ä¸æ£æ­¥ï¼ç¢°å·§ç¶éä¸åå°ç·å­©ï¼çå°ä»å¨å¹«ä¸ç¾¤äººæç§ï¼å¿ä¸­ç¶è±«äºå¹¾ç§ï¼ä¸¦æ±ºå®ä¸»åä¸åè©¢åéä¸éè¦å¹«å¿åç§ã
          </p>
          <p>
            æ­£ç¶æå°æå°ç·å­©èªªçåè³å¶èªæï¼çªç¶æèº«éåºç¾ä¸åç½äººé¢å­ï¼è·æèªªä»åååå·²ç¶æè·¯äººå¹«ä»åæéåç§äºã
          </p>
          <br />
          <p>ç°¡å®äºç¸ååï¼æç¥éä»ä¾èªå¾·åï¼åä»æåç¾å¨å¨åè³å¶å¬è·¯æè¡ã</p>
          <p>
            ç¶ä»ç¼ç¾ææ¯èªå·±åºä¾ç¨æå¾ï¼å¾é©è¨ä¹å¾ä½©ææä¸åäººæè¡çåæ°£ï¼ä¸¦æ¥èç±æå°éè«æå å¥ä»åçæé¤ã
          </p>
          <p>å°±éæ¨£ï¼æåä¸ä¾ä¸å¾å°æè«ä¸å»ã</p>
          <br />
          <p>å¾ä¾ä¹è¦å°ä»å¦å¤å©ä½æåï¼æ¯ä¸å°ä¾èªå°åº¦åçåè­çæä¾¶ï½</p>
          <p>
            ææ¾ç¶å»éå°åº¦ï¼èå°ç¶ææä¸»è¦æ¯æ³å» Kashmir
            ç¬å±±ï¼çµæä»ç«ç¶å°±ä¾èªåä»ç±³ç¾ï¼ï¼ççæ¯ç´æ¥èç XD
          </p>
          <br />
          <p>
            å¾ç¸éçé£ä¸å»å°ä¸èµ·å±é²æé¤ï¼æä»ç´°å°è§å¯ä»åçäºåæ¹å¼åå°è©±å§å®¹ï¼
            <b>å§å¿å¾æ²åæ­¢ä¼°ç®ãéç¾¤äººçå¯ä¿¡åº¦ãæ¯å¤å°</b>
            <strike>ï¼ççä¸è¦åèªªæå¾å¤©çå¾å®¹æè¢«é¨XDDï¼</strike>
          </p>
          <br />
          <p>
            å¾ä¾ä»åçè³æ±ºå®ä½å¨æå¾çæé¤¨ï¼æ©ä¸ä¸åäºº check
            inï¼æä¸å¸¶åä¸åæåå¥ä½ï¼è¶é¬§ XD
          </p>
          <p>
            æ¯ç¶å½éè³¦äºæç«å¨ãçæºèåéªãäº¤åè·¯å£çæ©æï¼æç¸½æ¯ææ¯«ä¸ç¶è±«å°é¸æå¾èã
          </p>
          <p>
            å°±éæ¨£...æå®å¨éåºå»äºï¼ç´æ¥ä¸äºä»åçè»ï¼åæ­£ä¹ä¸æ¯ç¬¬ä¸æ¬¡éæ¨£è¡åð
          </p>
          <p>éä¸å¤©ä»åéå¾å¥½å¿å°è¼æå°æ©å ´ï½</p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <p>æç¸ä¿¡ä¸ä¸å¥½äººå±å¤ï¼ä½ä¸å¯å¦èªå£äººå¿ç¶çå­å¨ã</p>
          <p>
            èä¸åªè¦éå°ä¸åï¼å°±åªéä¸åæåä¸è»çäººï¼éè¶³ä»¥çµ¦ä½ å¸¶ä¾æ¯æ»æ§çå¾æã
          </p>
          <p>
            ä½è¥å æ­¤æ°æ°å¢å¢ï¼æçµèéçäººæ¥è§¸ï¼ä½ æè¨±æå®ç¶ç¡æï¼ä½ä¹
            <b>ç­åé¯å¤±ä¸æ®µèéçäººç¾å¥½çéé</b>ã
          </p>
          <br />
          <p>æè¨±æ¯åäººé½éè¦ç·´ç¿ç¸ä¿¡éçäººðã</p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <br />
          <div className="reference">
            <h5>åèè³æ</h5>
            <ul className="text-bullet">
              <li>
                <a
                  href="https://www.denizlihotel.com/pamukkale/"
                  className="refLink"
                >
                  https://www.denizlihotel.com/pamukkale/
                </a>
              </li>
              <li>
                <a
                  href="https://www.denizlihotel.com/visit-pamukkale/"
                  className="refLink"
                >
                  https://www.denizlihotel.com/visit-pamukkale/
                </a>
              </li>
              <li>
                <a
                  href="https://www.goturkeytourism.com/about-turkey/turkish-denizli-rooster.html"
                  className="refLink"
                >
                  https://www.goturkeytourism.com/about-turkey/turkish-denizli-rooster.html
                </a>
              </li>
              <li>
                <a
                  href="https://www.istairport.com/en/passenger/transport/airport-transfers/havaist"
                  className="refLink"
                >
                  https://www.istairport.com/en/passenger/
                  <wbr />
                  transport/airport-transfers/havaist
                </a>
              </li>
              <li>
                <a
                  href="https://www.denizlihotel.com/hierapolis-pamukkale/"
                  className="refLink"
                >
                  https://www.denizlihotel.com/hierapolis-pamukkale/
                </a>
              </li>
              <li>
                <a
                  href="https://www.pamukkale.net/listingview.php?listingID=1"
                  className="refLink"
                >
                  https://www.pamukkale.net/listingview.php?listingID=1
                </a>
              </li>
            </ul>
          </div>
          <div className="like-button">
            <AiOutlineLike onClick={handleLikeClick} className="like-icon" />
            <span>{likes}</span>
          </div>
        </div>
        <br />
      </div>
    </main>
  );
};

export default PamukkaleArticle;
