import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import useLikeButton from "../useLikeButton";
import { AiOutlineLike } from "react-icons/ai";

const PcrArticle = () => {
  const { likes, handleLikeClick } = useLikeButton("PcrArticle");
  return (
    <div>
      <img
        src="https://i.imgur.com/dePDg6q.jpg?2"
        alt="hospital"
        className="istanbul-pic article-pic"
      />
      <h2 className="article-title">
        【防疫特集】等待 PCR 結果度秒如年！在伊斯坦堡公立醫院做 PCR 檢測
      </h2>
      <div className="DB-center">
        <div className="summary-container">
          <div className="date-summary">
            &nbsp;
            <IoTimeOutline className="total-icons" />
            &nbsp;2021/12/14（二）
          </div>
        </div>
        <br />
        <br />
        <p>事情是這樣的...</p>
        <p>
          2021 年 12 月 13 日，這天當晚曾跟室友密切接觸的德國人，其 PCR
          檢測結果為陽性，確認感染 COVID-19！
        </p>
        <p>當室友轉述我時，心情真的很錯綜複雜 — 既崩潰又懊悔又焦慮。</p>
        <p>
          想到在這疫情衝擊全球的動盪時代，仍選擇出國交換，此時此刻就是我承擔風險與償債的時候！
        </p>
        <br />
        <div className="meme-container">
          <img
            src="https://i.imgur.com/iIH0d2S.jpg?1"
            alt="sad-meme"
            className="meme"
          />
        </div>
        <br />
        <br />
        <p>事已至此，我們成了"被匡列的接觸者"。</p>
        <br />
        <p>
          當時已接近晚上 11
          點，我們一人待在一室視訊和討論，把最壞的情況想過，也就是如果檢測結果陽性，就必須完全線上上課，並囤糧或叫外賣，做好在家隔離
          14 天的準備！
        </p>
        <p>
          最尷尬的情況是如果我們兩人只有其中一人確診，那出來公共空間（我們共用廚房及衛浴）都必須戴口罩並隨手消毒，另外，必須保持屋內通風，再冷都要打開窗戶。
        </p>
        <br />
        <p>
          越想越深真的越害怕自己染疫，於是我們當機立斷，決定明天一早就去醫院做
          PCR 檢測。
        </p>
        <br />
        <p>
          關掉視訊的時間已來到凌晨一點，當天晚上真的是輾轉難眠，身體十分疲倦並異常緊繃，頭腦思緒紊亂，遲遲無法入眠....
        </p>
        <div className="devider">
          <BsDot className="dot" />
          <BsDot className="dot" />
          <BsDot className="dot" />
        </div>
        <h2>前往醫院</h2>
        <p>天剛破曉時，我就出發前往醫院。</p>
        <p>
          好在離我們公寓 1.4 公里就有一間公立醫院 —&nbsp;
          <a
            href="https://www.google.com.tr/maps/place/G%C3%B6ztepe+%C5%9Eehir+Hastanesi/@40.9867459,29.0466621,15z/data=!4m5!3m4!1s0x14cac7780cbb94d3:0x83d0c5c87c76dec5!8m2!3d40.9842535!4d29.056882?hl=zh-TW&shorturl=1"
            className="DB-link"
          >
            Göztepe Şehir Hastanesi
          </a>
          ，步行 15 分鐘左右就可抵達。
        </p>
        <br />
        <div className="img-double">
          <img
            className="style-2"
            src="https://i.imgur.com/LFNN991.jpg?1"
            alt="street"
          />
          <img
            className="style-2"
            src="https://i.imgur.com/2mBShGQ.jpg?1"
            alt="billboard"
          />
        </div>
        <br />
        來到醫院的入口就會看到顯眼的指示牌，第一行標示著「 PCR
        Test（左轉箭頭）」
        <br />
        <br />
        <img src="https://i.imgur.com/M9sJDnX.jpg?1" alt="outpatient" />
        <p className="imgCaption">牆上標語 poliklinik 是門診部的意思。</p>
        <br />
        <p>
          進到門診部，醫生會詢問做 PCR 的目的，並會給你兩個條碼（barkod） —
          試管標示＆自己留存。
        </p>
        <p>
          你會需要出示「居留證」，並留下自己在當地的手機號碼（若確診會寄簡訊通知
          &nbsp;
          <strike>（抖）</strike>）。
        </p>
        <br />
        <p>
          btw
          我發現土耳其醫生都不太會說英文，反倒是旁邊看起來像見習醫師或護理師的人員幫我翻譯，這真的是一件很奇妙的現象！
        </p>
        <br />
        <div className="img-double">
          <img
            className="style-2"
            src="https://i.imgur.com/0caKZ75.jpg?1"
            alt="barcode"
          />
          <img
            className="style-2"
            src="https://i.imgur.com/7kycsOv.jpg?1"
            alt="PCR test"
          />
        </div>
        <p className="imgCaption">
          篩檢站就位在該門診部的後方（門診部出來右轉兩次）
        </p>
        <br />
        <p>輪到你時，會需要給出其中一張 barcode（試管標示用）。</p>
        <p>
          接著就是嘴巴張開，採檢人員會拿著棉棒在你的舌根摩擦做快篩取樣，五秒過後再移置鼻子&nbsp;
          <strike>（捅到靈魂深處）</strike>
        </p>
        <br />
        <p>
          從篩檢站出來後，我喵了一眼手錶，發現一切都超級神速，從我踏出家門到採檢完成的那一刻，30
          分鐘內就搞定了！
        </p>
        <br />
        <div className="devider">
          <BsDot className="dot" />
          <BsDot className="dot" />
          <BsDot className="dot" />
        </div>
        <br />
        <h2>院方簡訊＆結果查詢</h2>
        <div className="img-double">
          <img
            className="style-3"
            src="https://i.imgur.com/Vz3I0DY.jpg?1"
            alt="message"
          />
          <img
            className="style-2"
            src="https://i.imgur.com/JMsXQIY.jpg?1"
            alt="e-nabiz"
          />
        </div>
        <br />
        <p>醫生問診完五分鐘內，你的手機就會收到醫院傳來的簡訊。</p>
        <p>
          主要告知你 PCR 結果會在 6 至 24 小時出來，可以到&nbsp;
          <a
            href="https://enabiz.gov.tr/PcrTestSonuc/Index"
            className="DB-link"
          >
            e-nabiz 個人健康系統
          </a>
          &nbsp;下載篩檢結果（輸入 barcode 號碼以及居留證末四碼）
        </p>
        <br />
        <img
          src="https://i.imgur.com/MPE3VKy.jpg?1"
          alt="PCR Result"
          className="verticle-img"
        />
        <br />
        <br />
        <p>下午 3 點左右，也就是在 PCR 檢測 7 小時後。</p>
        <p>
          當時我坐在醫院大廳的椅子上休息，因為才剛打完 booster shot – BNT
          疫苗，想說待在醫院觀察 30 分鐘。
        </p>
        <p>
          我拿起手機無腦地輸入居留證及條碼（滿六小時後，已經不知道刷了幾十次網站），只見下載頁面的旋轉圓圈動畫，儘管它可能只轉了
          4、5 圈，但每轉一圈，我的心臟都更加猛烈地跳動。
        </p>
        <br />
        <p>
          我用雙手放大 Test Results
          的欄位，N！E！G！A！T！I！V！E！（簡直熱淚盈眶😭😭😭😭😭😭😭😭）
        </p>
        <br />
        <p>下一秒，立馬興奮地打給我媽，告知這個好消息。</p>
        <p>我想最感到抱歉就是讓我的家人跟著提心吊膽。</p>
        <p>
          還好！一切沒事！<strike>（暫時的）</strike>
        </p>
        <br />
        <div className="devider">
          <BsDot className="dot" />
          <BsDot className="dot" />
          <BsDot className="dot" />
        </div>
        <h2>總結</h2>
        <div>
          <ul className="text-bullet">
            <li>在當地做 PCR 不需事前預約</li>
            <li>
              準備事項：居留證（才可以免費施打）、手機號碼、護照（以備不時之需）、一顆冷靜的心
            </li>
            <li>確診結果查詢（6-24小時）：</li>
            <ul className="text-bullet">
              <li>
                陰性：&nbsp;
                <a
                  href="https://enabiz.gov.tr/
                  PcrTestSonuc/Index"
                  className="DB-link"
                >
                  點我連結
                </a>
              </li>
              <li>陽性：簡訊通知</li>
            </ul>
          </ul>
        </div>
        <div className="devider">
          <BsDot className="dot" />
          <BsDot className="dot" />
          <BsDot className="dot" />
        </div>
        <br />
        <h2>後記</h2>
        <p>等待結果的期間，內心真的非常煎熬，焦慮心態驅使我一直往壞處想。</p>
        <p>並深刻體悟到「身體健康就是人生最大的幸福」！</p>
        <br />
        <p>
          有了這次經歷，我也不斷自我反思，真的有必要把得 COVID 視為世界末日嗎？
        </p>
        <p>
          既然都打了兩劑疫苗，已經大幅減低重症及死亡的風險，而染疫可能就像是個小感冒一樣。
        </p>
        <p>自己是不是其實太過戒慎恐懼！？</p>
        <p>我自己一直都保有屬於台灣人的特殊文化根性 — 極度惶恐染疫！</p>
        <p>在台灣，看到確診數破百就有如末日來臨一般。</p>
        <p>
          在土耳其，從九月至今，每日確診人數仍是以 2 萬到 3 萬的數字在衝呢 🙃
        </p>
        <br />
        <p>隔國就恍如隔世</p>
        <br />
        <p>
          但對我來說，我還是堅持有自己的一套防疫標準，如果我都已經盡力做到了，結果還是染疫，想必內心也會比「完全不防疫」還要好受一些
        </p>
        <br />
        <p>最後，謝謝 Wendy 提供的資訊及室友的互相扶持</p>
        <p>以上，希望對要在土耳其做 PCR 檢測或是等待 PCR 結果的你有幫助！</p>
        <p>祝平安喜樂！</p>
        <br />
        <div className="like-button">
          <AiOutlineLike onClick={handleLikeClick} className="like-icon" />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default PcrArticle;
