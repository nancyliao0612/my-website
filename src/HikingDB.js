import React from "react";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaMountain,
  FaRoad,
} from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

const HikingDB = () => {
  return (
    <>
      <div>
        <img src="https://i.imgur.com/3IHD5rl.png" alt="" className="map-pic" />
      </div>
      <div className="DB-center">
        <div className="summary-container">
          <div className="summary time">
            <AiFillClockCircle className="total-icons" />
            ：3 天
          </div>
          <div className="summary">
            <FaRoad className="total-icons" />
            ：62 公里
          </div>
          <div className="summary">
            <FaMountain className="total-icons" />
            ：4 座百岳
          </div>
        </div>
        <p>
          大霸尖山位於雪山山脈，自古是泰雅族的聖山，傳說是祖先的發源地，相傳大洪水時泰雅祖先爬到大霸躲過了洪水，並在大霸的周邊生活數百年。四面懸岩峭壁的大霸尖山，遠眺形狀酷似酒桶，因此早期漢族稱之為「酒桶山」，除此之外，山勢磅礡奇特，又有「世
          紀奇峰」的美譽。
          <br />
          除了分享大霸尖山三天兩夜的行程規劃，也會在最後聊聊自己獨攀的心得以及相關的注意事項。
          <br />
        </p>
        <h3>行程規劃</h3>
        <div>
          <h5>｜Day 1（總距離：23 公里，約 9.5 小時）</h5>
          <br />
          <span>
            大霸登山服務站 →（19 km 大鹿林道東線， 6hr10m）→ 馬達拉西登山口 →
            （4 km， 3hr20m）→ 九九山莊
          </span>
          <br />
          <h5>｜Day 2（總距離：18 公里，約 14 小時）</h5>
          <br />
          <span>
            九九山莊 →（2km，1hr 40m）→ 3050高地 → （3.6km，2hr）→ 中霸山屋 →
            （1.3km，1hr） → 大霸尖山 →（0.7km，1hr） → 小霸尖山
            →（3.2km，2hr40m）→ 伊澤山登山口→ 伊澤山（單程 0.5km，來回 25m） →
            伊澤山登山口 →（2.2km，1hr50m）→ 加利山登山口 →
            加利山攻頂（單程1km，來回 50m） → 加利山登山口（2km，1hr10m） →
            九九山莊
          </span>
          <br />
          <h5>｜Day 3（總距離：23 公里，約 9.5 小時）</h5>
          <br />
          <span>
            九九山莊 →（4.0K，2hr10m）→ 馬達拉溪登山口 →（19.0K，5hr10m）→
            大霸登山服務站
          </span>
          <br />
          <span>
            整體難易度：
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
              <p className="text-small">（提供給熟知楠西體力的朋友當參考）</p>
            </div>
          </span>
        </div>
        <h3>入園證/入山證</h3>
        <ul className="text-bullet">
          <li>申請網址：台灣國家公園入園入山線上申請（雪霸國家公園 大霸線）</li>
          <li>申請時間：入園日前 5 日至入園日前 2 個月每日 07:00-23:00 提出</li>
          <li>
            申請制度：雪霸國家公園採行「先搶先贏」，非抽籤制！（盡量提早 45
            前申請才保險哦！）
          </li>
          <li>
            注意事項：
            <li className="bullet-tab">
              入園申請會綁定山屋資格，隨時注意是否收到九九山莊繳費通知的信件。
            </li>
            <li className="bullet-tab">
              入園許可證需列印兩份，一份投遞至大霸登山服務口信箱，另一份給九九山莊的人員查看。
            </li>
          </li>
          <li>
            side note: 申請規則時常更動，最新情況還是要依照國家公園公告為主！
          </li>
        </ul>
        <h3>九九山莊</h3>
        <ul className="text-bullet">
          九九山莊海拔 2,699
          公尺，要爬大小霸的山友通常會選擇在此住宿兩個晚上。（體力較好的也可以選擇第一天住中霸山屋）
          <li>床位：九九山莊床位查詢</li>
          <li>網路：全區皆有網路，收訊良好</li>
          <li>費用：$200 / 晚（需事先匯款）</li>
          <li>
            注意事項：
            <li className="bullet-tab">
              注意事項：龍門客棧的通鋪會有老鼠出沒，糧食記得要密封好。
            </li>
          </li>
        </ul>
        <div className="underline-article"></div>
        <h3>Day 1</h3>
        <p>
          第一天凌晨 2:30 從台北開車出發，抵達大霸登山服務站的時間是早上 6:30。
          建議可以先在服務站上洗手間，不然下個公廁就是 19
          公里處，要到馬達拉西登山口附近。
          <br />
          越過管制口的柵欄後，就是長達 19 公里的「大鹿林道東線」。
          <br />
          左右林蔭遮蔽住大部分的陽光，一路走來不會很曝曬也十分平緩。
          <br />
          <br />
        </p>
        <img src="https://i.imgur.com/QBMMoP6.jpg" alt="" />
        <br />
        <br />
        14km 左右可以聽到瀑布聲，14.5 km
        就會到東線瀑布（回程有空也可以下去泡泡水）
        <br />
        15.2 km 經過廢棄工寮，再撐一下就到 17k 的捷徑處。
        <br />
        <br />
        <img src="https://i.imgur.com/tSYyE93.jpg" alt="" />
        <img src="https://i.imgur.com/UFJzyOq.jpg" alt="" />
        <br />
        <br />
        如果想要走捷徑，省去約 20 分鐘的路程，就要在 17
        公里處的廣場下切，那裡有兩個石板桌椅，會很顯眼。（忘記拍照了QQ）
        <br />
        捷徑路段的坡度較陡，需拉繩慢慢往下走，一下來就會聽到馬達拉溪的溪水聲。
        <br />
        到馬達拉溪登山口的時間差不多是中午，可以選擇在這邊吃午餐和休息。
        <br />
        side note: 廁所位置 - 捷徑下來後往右走 100 公尺處（會先經過工寮）。
        <br />
        <br />
        <img src="https://i.imgur.com/66xwzi2.jpg" alt="" />
        <br />
        <br />
        經過馬達拉溪吊橋後，就邁入大霸尖山登山路線，並迎來九九山莊前的大魔王 — 4
        公里抖上950 公尺（真的很累....打死都不要再回去）。
        <br />
        前面林道都是一個人走，但在這段碰巧讓我遇上一個非常可愛的登山家庭。
        <br />
        聊著聊著也就一路跟著他們的速度走，依照我的體力，朋友幫忙估計要爬個 4.5 -
        5 個小時。
        <br />
        結果跟著他們的配速走，竟然花 3 小時 20 分就到九九山莊了！
        <br />
        現在回想還有點難以置信。
        <br />
        <br />
        <img src="https://i.imgur.com/JwJsKtG.jpg" alt="" />
        <br />
        <br />
        抵達後，莊主會帶你到登記處簽名報到，記得攜帶身份證出示。
        <br />
        接著莊主會介紹山莊環境，包含用餐地點、床位和洗手間。（一晚住宿費 $200 /
        人，需提前匯款）
        關於九九山莊的網路，現在整個山莊都有網路可使用！不需要像以前一樣步行一段路到「九九網咖處」（歡呼👏）
        <br />
        <br />
        和家人報完平安後，第一件事情就直接倒頭大睡，睡到 10
        點左右被空空的肚子餓醒。
        <br />
        環顧四周，漆黑一片，我獨自起身躡手躡腳到食堂燒水煮泡麵來吃。
        <br />
        如果你跟我一樣怕黑，記得抬頭望向夜空，保證美得讓你震懾！
        <br />
        <div className="underline-article"></div>
        <h3>Day 2</h3>
        <br />
        凌晨 2:30 起登。
        <br />
        到最佳觀賞日出的 3050 高地距離為 2 公里。
        <br />
        <br />
        無奈第二天身體狀況沒有很好，有點高山症發作，
        <br />
        雖沒能順利在 3050 高地看日出。但遠眺前方的大、小霸，心情還是很高昂！
        <br />
        四、五月份的大霸隨處可見一叢叢飽滿綻放的高山杜鵑。
        <br />
        春末氣候宜人，是非常適合賞花與攀登大霸的季節。
        <br />
        <br />
        <img src="https://i.imgur.com/nLYcpiq.jpg" alt="" />
        <br />
        <br />
        大概在 7-8k 之間，往右有一條通往伊澤山的捷徑
        <br />
        該條路相當陡峭，如果發現不太對勁記得要回頭！
        <br />
        <br />
        <img src="https://i.imgur.com/RWnc8ZF.png" alt="" />
        <br />
        來到 10.5 k 處的「中霸坪」，這裡是將大、小霸盡收眼底的絕佳位置。
        <br />
        <img src="https://i.imgur.com/MVN8Wii.jpg" alt="" />
        <br />
        記得準備 500 元鈔票呦！
        <br />
        <img src="https://i.imgur.com/8ouaCsc.jpg" alt="" />
        <br />
        <br />
        早上 8 點左右抵達大霸尖山（3492公尺）！
        <br />
        一親聖山芳澤，對她的霸氣凜然，不禁令人肅然起敬
        <br />
        早期登山客可以沿著鐵梯登上大霸尖山山頂，但雪霸國家公園管理處在 2010
        年即公告禁止登頂。
        <br />
        現在山友可以在霸基的三角點合影。
        <br />
        <br />
        <img src="https://i.imgur.com/EBm1qeW.jpg" alt="" />
        <div className="img-double">
          <img src="https://i.imgur.com/xdDV437.jpg" alt="" />
          <img src="https://i.imgur.com/geg1mqT.jpg" alt="" />
        </div>
        <br />
        沿著大霸尖山右側一路走下去，最終即可抵達小霸尖山，這段路約長 0.7 公里。
        <br />
        從大霸基底往上仰望大霸岩壁，
        <br />
        <br />
        <img src="https://i.imgur.com/sEbR78w.jpg" alt="" />
        <br />
        <br />
        小霸最後一段的岩壁裸露，需要收起登山杖，借助雙手慢慢往上攀爬。
        <br />
        但其實沒有想像中的可怕，反而看 youtube 影片比較令人害怕 XD
        <br />
        <br />
        <img src="https://i.imgur.com/qGjzLCF.jpg" alt="" />
        <img src="https://i.imgur.com/YtUK4qx.jpg" alt="" />
        <img src="https://i.imgur.com/iaB0Rre.jpg" alt="" />
        <div className="img-double">
          <img src="https://i.imgur.com/prcZ8He.jpg" alt="" />
          <img src="https://i.imgur.com/Mz7F4Sx.jpg" alt="" />
        </div>
        <h3>後記</h3>
        這三天兩夜走來最感謝緣分讓我結識一個登山家庭，他們很可愛、話不多，甚至有點木訥❤️
        <br />
        他們不會給我壓力，必要時才跟我打氣，總是叫我腳步踩穩、慢慢走就好。
        <br />
        何其幸運可以與他們相遇，說這次大霸之旅是我此生最美好、最難忘的一次登山經驗也不為過。
        <br />
        非常謝謝這家人、其他山友的照顧，以及支持我跳脫舒適圈並信任我的家人！
        <br /> <br />
        <img src="https://i.imgur.com/7q6Jk9r.jpg" alt="" />
      </div>
    </>
  );
};

export default HikingDB;
