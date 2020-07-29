const path = require('path');
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
membersLinks =
[
    {
        "id": "oneone",
        "url": "1-1.jpg",
        "name": "1-1 黃鴻琪",
        "tag": [
            "科技宅",
            "專業的嚴師與溫柔小白兔綜合體",
            "認真工作認真玩"
        ],
        "future": "從小就懷有一個創業夢，希望透過科技幫助世界解決問題，喜歡挑戰自己，目前規劃先往科技業 PM 發展，磨練自己累積實力，增加自己的能力，有機會也期待出國闖蕩，見識不一樣的環境，突破自我。",
        "learned": "很享受一群人吵吵鬧鬧，熱鬧自在的那種氣氛，一起共度許多專案的苦，雖然不是每個專案都有好結果，雖然因為疫情阻止我們時常相聚，但也因此我們更珍惜每次相遇的時刻，每個在一起的回憶更加刻苦銘心，一年下來，帶走了回憶，提升了自己，更認識自我，還有一群超讚的夥伴一同繼續走下去。",
        "facebook":"https://www.facebook.com/CaptainRedwolf717",
        "email":"steven199807717@gmail.com"
    },
    {
        "id": "onetwo",
        "url": "1-2.jpg",
        "name": "1-2 蔡佩珊",
        "tag": [
            "快樂",
            "自由",
            "還是自由"
	],
        "future": "不管在什麼產業，我想當一顆小螺絲釘，不起眼卻重要、很累卻很踏實、也許無聊但我很懂自得其樂，所以沒關係的；也許戲棚站久了就是我的，或也有可能我腳麻掉，反正最後，如果哪一天生鏽了就好好養老吧。",
        "learned": "如何溫柔待人，尊重每個人的決定不強求、自己不卑微、別人也不難做，還有各種的硬實力、軟實力，加上不斷的思考、紀錄、反省、檢討，臨近結業的時候，還學會了如何有事沒事就開車。",
        "facebook":"https://www.facebook.com/profile.php?id=100002592446397",
        "email":"tinat6608@gmail.com"
    },
    {
        "id": "onethree",
        "url": "1-3.jpg",
	"name": "1-3 陳建廷",
        "tag": [
            "行銷",
            "話題車手",
            "至鬱系男子"
        ],
        "future": "",
        "learned": "當工作失火，會有人笑你，會有人救你，資種夥伴則是邊笑邊救你。 33 說「我的世界就是 0 和 1 組成的！」而我才真正學會合作需要理解和溝通；Dash說「閉嘴！快寫！」告訴我行動的理由只需要一個；吉米在深夜叫我想想他，我會比較好過，謝謝，真的好很多：） ps. 吉米的等價交換：用靈魂交換官網。",
        "facebook":"https://www.facebook.com/chienting0101",
        "email":"chienting0101@gmail.com"
    },
    {
        "id": "onefour",
        "url": "1-4.jpg",
        "name": "1-4 蔡珮歆",
        "tag": [
            "不當老師",
            "不甘平庸",
            "不服現況"
	],
        "future": "雖然是放棄教程的師培生，但只是因為知道自己不會當體制內老師，不想浪費時間。目前想先做看看行銷、UI/UX 兩個職位，但隱約覺得自己最終還是會想回到教育或社會企業，成就自己也成就他人。",
        "learned": "學習更勇敢表達、並且相信他人會接受這樣的自己。和同溫層以外的人交朋友起初都會覺得彼此頻率不合，但只要跨過那道坎就會發現自己交了一群超級稀有又珍貴的朋友。",
        "facebook":"https://www.facebook.com/Tsaipeishin",
        "email":"40500214e@gapps.ntnu.edu.tw"
    },
    {
        "id": "onefive",
        "url": "1-5.jpg",
        "name": "1-5 張翔淵",
        "tag": [
            "帥氣",
            "超前",
            "領袖"
	],
        "future": "未來最終目標獲得世界上最大權力，掌握世界走向、他人生死，為了達成目的會先賺錢，目前正在努力用夢想去建築喔～",
        "learned": "讓我一直以來創業靈感得以實踐其中一個因素，看到很多成功模板激勵了我也交到很多朋友。",
        "facebook":"",
        "email":""
    },
    {
        "id": "oneseven",
        "url": "1-7.jpg",
        "name": "1-7 柯敦瀚",
        "tag": [
            "有錢",
            "有內涵",
            "有品味"
	],
        "future": "我希望我未來從事的職業不僅能滿足我的生理所需，更重要的是能夠滿足我的內心，不僅對自己也能對他人有所影響，未來多可期，現在說死就太無趣囉。",
        "learned": "資種的一年使我更加了解團隊合作，不僅是人與人之間的相處、共事，更能夠了解自己在資種這小社會中的定位，藉此也能夠勾勒自身在社會中的形象一二，此外，課程、專案等也豐富了我的視野，擴展了我的心靈，更加了解這個世界，資種的一年收穫頗豐，而最大的收穫就是身旁這 32 位一起走到最後的夥伴。",
        "facebook":"",
        "email":""
    },
    {
        "id": "twoone",
        "url": "2-1.jpg",
        "name": "2-1劉竹",
        "tag": [
            "尋找方向",
            "博觀而約取厚積而薄發",
            "不後悔自己選擇"
	],
        "future": "",
        "learned": "在資種這段時光認識到不同科系一群好夥伴，共同完成了許多充實豐富的專案，一同學習一起成長。在這當中獲得、提升的許多像是表達能力、撰寫訪綱與會議紀錄等等數之不盡，但最重要的是跟大家一起完成。比起一個人走快，我跟喜歡一群人走的遠～",
        "facebook":"",
        "email":""
    },
    {
        "id": "twotwo",
        "url": "2-2.jpg",
        "name": "2-2 蔡朋伶",
        "tag": [
            "Dash",
            "自然捲",
            "我好荒唐"
	],
        "future": "",
        "learned": "在資種學會最多的，是更靠近世界真實的樣貌。認識了不同領域的人，有了更寬廣的視野，嘗試了不一樣的方法，體會不同風味的酸甜苦辣，學習接受世界的險惡與痛苦，同時也看見善良複利成長。",
        "facebook":"",
        "email":""
    },
    {
        "id": "twothree",
        "url": "2-3.jpg",
        "name": "2-3 黃文萱",
        "tag": [
            "151 矮唷我的媽",
            "口頭禪是哈哈笑死",
            "上輩子可能是啞巴"
	],
        "future": "",
        "learned": "轉眼間來到了結訓，不敢說一年後的自己找到了人生方向，但透過每次專案所擔任的職務和角色（PM、行銷、公關等），抑或是學員間的相互回饋，我敢說我更認識了自己！謝謝一年前的我勇敢踏上資種，將會帶著資種人的精神延續我未來的生活！",
        "facebook":"https://www.facebook.com/profile.php?id=100002383699707",
        "email":"wwnxxn518@gmail.com"
    },
    {
        "id": "twofour",
        "url": "2-4.jpg",
        "name": "2-4 何宇軒",
        "tag": [
            "保持彈性",
            "水瓶座",
            "波霸奶茶"
	],
        "future": "",
        "learned": "TUV 專案的第二組、TB 專案的春酒舞組、職涯專案的召部團隊和招生團隊的人資組都讓我印象深刻，這一年最大的收穫就是和資種人的回憶，讓我知道分享和回饋是可以很溫暖很透明的，這一年辛苦了，希望大家每年都可以至少約一次種遊，嗨起來！",
        "facebook":"https://www.facebook.com/profile.php?id=100000487502374",
        "email":"hydds226698@yahoo.com.tw"
    },
    {
        "id": "twofive",
        "url": "2-5.jpg",
        "name": "2-5 謝秉峻",
        "tag": [
            "童軍",
            "戶外活動",
            "公仔模型"
	],
        "future": "",
        "learned": "在資種，認識許多有趣的靈魂，這一年中，見識到許多沒見過的風景，跟大家一起上課、做專案，這邊就是個避風港，有各種新奇的體驗，每次相見總能迸發出新的火花，好地方，不來嗎？",
        "facebook":"",
        "email":""
    },
    {
        "id": "twosix",
        "url": "2-6.jpg",
        "name": "2-6 周郁芳",
        "tag": [
            "辣妹種子",
            "櫻桃美眉",
            "墜愛資種的天使北鼻"
	],
        "future": "我人生最大的夢想就是當一位「好媽媽」，會用畢生的愛和心血來愛自己的寶貝和這個世界。  我的實習選擇「母嬰產業」相關的公司，在未來這一年，我在「逗寶國際有限公司」擔任行銷營運處實習生，希望可以透過實習了解母嬰產業，也希望可以找到適合自己的部門。",
        "learned": "在資種我學習認識自己、記得自己、擁抱自己、愛自己、珍惜自己。  大家都說資種是一個可以試錯、練習跌倒的地方，一開始我以為這句話是適用在專案上、探索職涯上，後來我才意識到，原來資種也是一個在「探索自己」上能夠包容、給予愛的地方啊。  我好愛這裡，我不但在資種學習毀滅，也在資種學習重生。",
        "facebook":"https://www.facebook.com/profile.php?id=100002161659865",
        "email":"fannyqaz98@gmail.com"
    },
    {
        "id": "twoseven",
        "url": "2-7.jpg",
        "name": "2-7 孫睿廷",
        "tag": [
            "黑",
            "愛劉竹的",
            "小帥哥（還不死心阿？）"
	],
        "future": "我之後想要去科技大企業當一位 UX Generalist（這樣產品會影響到很多人），成為一位注重使用者經驗的設計師，同時也是研究員，就可以偷渡理念到設計產品上。",
        "learned": "跟很多不同種類型的人合作、更了解自己、遇到了很有責任感的人、交到了好朋友、還有很多社會支持、學會更審慎評估自身時間、嘗試跳舞、犯錯然後學習做出調整、了解反饋的重要性、了解因果輪迴、業力引爆、學習不要太快將人分類、知道自己要更謙虛還有努力，偷偷地很喜歡這個地方。",
        "facebook":"https://www.facebook.com/sunsun06",
        "email":"tomy398398@gmail.com"
    },
    {
        "id": "threeone",
        "url": "3-1.jpg",
        "name": "3-1 林欣儀",
        "tag": [
            "永遠的美宣組組員",
            "快樂是人生指南",
            "唯一支持地瓜球"
	],
        "future": "",
        "learned": "每次到了專案高峰期的時候總是很崩潰、很累。不過也在事後學到就算很爆炸也不要輕言放棄，在未來回頭看才能不留遺憾，並且感謝當初付出全力的自己。",
        "facebook":"https://www.facebook.com/profile.php?id=100001348688975",
        "email":"twm0987179285@gmail.com"
    },
    {
        "id": "threetwo",
        "url": "3-2.jpg",
        "name": "3-2 林佩蕾",
        "tag": [
            "學員長",
            "熬夜也會把事情做完",
            "大家吃不完的都給我"
	],
        "future": "我是佩蕾，是個善良、理性的人，一直以來都對社會議題抱持著高度的興趣，也很重視人與人之間的連結，在維持情感聯繫之餘，更期待能與主管達到水平溝通，提升團隊效率。希望未來可以到新創產業或是非營利組織工作，發揮自己的影響力！",
        "learned": "我在資種學會用 Adobe illustrator，嘗試將腦袋的畫面具象建構出來，很開心的是除了有美感、對文字及構圖相當敏銳之外，現在我是個有實作能力的人。資種需要大量的設計人力維持專案運作，正巧讓我能長期、穩定的練習製圖，更因為學會軟體操作，讓我能聽懂跟給出實務面的回饋。",
        "facebook":"",
        "email":""
    },
    {
        "id": "threethree",
        "url": "3-3.jpg",
        "name": "3-3 蔡旻諺",
        "tag": [
            "悶騷",
            "講話慢",
            "眼睛小"
	],
        "future": "目前在外商人事顧問公司實習，規劃往業務或人資的領域鑽研，並在外商公司深耕。未來若有機會，希望能外派到國外工作，並在當地讀研究所，完成我的留學夢。",
        "learned": "這是一個高度屬人的地方。17 屆經歷了許多不可抗力的外在風險，但我很少聽到有誰不喜歡這裡的人，我想這就是資種魅力的地方吧。即便我們遇到多麼困難、挫折，偶爾聽到有人想要放棄、離開，但從來沒有人真的離開過，因為我們已經營造出歸屬感了。最重要的回饋、分享不會輪為喊口號，而是希望大家之後依然能回來，持續這樣的精神。",
        "facebook":"https://www.facebook.com/tsaiminyantyler",
        "email":"tiger114114@gmail.com"
    },
    {
        "id": "threefour",
        "url": "3-4.jpg",
        "name": "3-4 李新壹",
        "tag": [
            "擇你所愛愛你所擇",
            "those who do not remember the past are condemned to repeat it",
            "Arbeit macht frei"
	],
        "future": "想要創業，針對現行的社區醫療體系以及長照系統提出改善的方向，能夠將社會醫療保健網深入到社區中的老人家中，分散教學醫院的龐大人流，更貼近的接觸到長照系統中的老人",
        "learned": "",
        "facebook":"",
        "email":""
    },
    {
        "id": "threefive",
        "url": "3-5.jpg",
        "name": "3-5 許馥童",
        "tag": [
            "半夜才是工作時間",
            "好想把立頓當水喝",
            "怎麼會有人喜歡吃小珍珠？"
	],
        "future": "很想開餐廳～但不是網美咖啡廳，是麵攤、小吃類型的店，因為覺得這種平凡的食物比起浮誇高貴的食物更能讓人感到幸福！未來志向就是運用四年所學找到一個不排斥的工作賺錢，並在閒暇時間精進廚藝，聽起來很沒有追求，但這是我追求夢想的方式！",
        "learned": "",
        "facebook":"",
        "email":""
    },
    {
        "id": "threesix",
        "url": "3-6.jpg",
        "name": "3-6 王立宇",
        "tag":[
            "小眼",
            "台中在地鄉親",
            "我只 4 葛肥宅"
	],
        "future": "想往金融投顧或是管顧產業發展，之後會培養自己更多的程式＆資料分析能力並結合大學所學的會計金融知識做應用。",
        "learned": "溝通表達能力、社交能力、講幹話能力、時間管理能力、一些人脈。",
        "facebook":"https://www.facebook.com/liyu.wang.503",
        "email":"e04110132@gmail.com"
    },
    {
        "id": "threeseven",
        "url": "3-7.jpg",
        "name": "3-7 許立璇",
        "tag": [
            "早睡保肝好寶寶",
            "loop 吃吃喝喝睡睡",
            "永遠不要低頭不然會有雙下巴"
	],
        "future": "幸運的話能中大樂透，安養青年、中年和老年。不幸運的話能寫 code 賣肝，在肝壞掉之前，開一間豆花店，安養中、晚年。",
        "learned": "",
        "facebook":"https://www.facebook.com/profile.php?id=100001997016424",
        "email":"10636004@ntub.edu.tw"
    },
    {
        "id": "fourone",
        "url": "4-1.jpg",
        "name": "4-1 蔡欣妤",
        "tag": [
            "活動系",
            "密室逃脫",
            "2300 後就是熬夜"
	],
        "future": "",
        "learned": "我想，我收穫到最多的是勇氣還有資種十七屆的這群人。前期忙碌隱居在學校活動中，錯過了認識這群人的最佳時機，很謝謝身旁的夥伴，讓我有動力跟勇氣繼續留下來認識這群人，外表看似瘋狂吵鬧，內心卻是溫柔而堅定的人們。",
        "facebook":"",
        "email":""
    },
    {
        "id": "fourtwo",
        "url": "4-2.jpg",
        "name": "4-2 何珮琳",
        "tag": [
            "不講話會死",
            "吃可愛長大",
            "永遠都要記得自己是個很棒的人"
	],
        "future": "",
        "learned": "「當個 Taker 很簡單，但 Giver 才能不斷的為社會創造價值，推動發生改變」大愛彥祺這段話。一開始在資種認真有痛苦想退出的念頭，但真的當自己越投入，作的事看起像付出，意想不到得到更多回饋與收穫。謝謝自己不怕死的當了一次召部，還有所有願意讓我好好認識你的每一個人。",
        "facebook":"https://www.facebook.com/profile.php?id=100000561170143",
        "email":"barbiehpl@gmail.com"
    },
    {
        "id": "fourthree",
        "url": "4-3.jpg",
        "name": "4-3 辛孟哲",
        "tag": [
            "健身健身",
            "行銷研究",
            "數據分析"
	],
        "future": "數據是個潘朵拉寶盒，深具魅惑與煎熬。未來想繼續淪陷於資料分析於商業的應用，之前在金融業初嘗了甜頭，如毒品般將 Python 與 R 深深烙印在腦海裡，無法自拔。",
        "learned": "跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域跨領域，想跨時，資種永遠信任我，讓我嘗試在舞台上發揮。",
        "facebook":"",
        "email":""
    },
    {
        "id": "fourfour",
        "url": "4-4.jpg",
        "name": "4-4 陳泳寧",
        "tag": [
            "創業",
            "環遊世界",
            "rainbow 人生"
	],
        "future": "",
        "learned": "學到如何做專案管理，如何適當配置有限的時間與資源，與一群人一同達成目標。此外更加深了自身於產業的認知，雖然還是迷惘，但也更加知道如何積極面對未知。",
        "facebook":"https://www.facebook.com/profile.php?id=100002444025963",
        "email":"smilerainbow000@gmail.com"
    },
    {
        "id": "fourfive",
        "url": "4-5.jpg",
        "name": "4-5 張晨維",
        "tag": [
            "資種 podcast暖男主播",
            "熱血 Deloitte 查帳員",
            "追求卓越成功就會不請自來"
	],
        "future": "我未來想要從事金融相關的職業，目前以 MA、總體經濟研究員和財務管理專業人員作為目標，期望自己能夠在會研所繼續強化財務規劃能力並考取 CPA 證照，同時爭取參加台大 Colla 或 TMBA 等社團培養分析國際金融及產業趨勢的能力。",
        "learned": "",
        "facebook":"https://www.facebook.com/profile.php?id=100003533167095",
        "email":"jerry15638@gmail.com"
    },
    {
        "id": "fourseven",
        "url": "4-7.jpg",
        "name": "4-7 陳璿安",
        "tag": [
            "理性",
            "新創",
            "麵包大於愛情"
	],
        "future": "",
        "learned": "在資種的這一年接觸到了很多行銷管理的課程，雖然完全跟我的科系沾不上邊，但也是我當初選擇加入資種的原因。這一年我也認識了來自不同學校和科系的夥伴，而最開心的事莫過於認識到大家，也從其他人身上學習到不一樣的做事態度及方式，正所謂「三人行，必有我師」。",
        "facebook":"https://www.facebook.com/profile.php?id=100007356318263",
        "email":"hsuan880430@gmail.com"
    },
    {
        "id": "fiveone",
        "url": "5-1.jpg",
        "name": "5-1 陳均彥",
        "tag": [
            "教育",
            "幸運",
            "理工人"
	],
        "future": "未來希望能在高中（或其它單位）擔任可以陪伴學生度過三年時光的導師。除了教他們學科之外，也想將我會的各種領域的知識分享給他們，同時也傳遞一些好的價值觀和心態，更重要的是希望能幫助他們更認識自己，更知道未來要往什麼方向走。",
        "learned": "",
        "facebook":"",
        "email":""
    },
    {
        "id": "fivetwo",
        "url": "5-2.jpg",
        "name": "5-2 沈家聿",
        "tag": [
            "溫暖",
            "積陰德",
            "想下船"
	],
        "future": "",
        "learned": "遇見一群真的很好很好的人們，互相支持彼此完成目標，在一次次的專案中磨練練專案的軟實力。也在擔任職涯專案召部的漫長期間，學習如何在疫情和有限的時間預算人力下達到預期的成效，也突破自已去做一些不擅長的事情。",
        "facebook":"https://www.facebook.com/profile.php?id=100003760851507",
        "email":"july94088@gmail.com"
    },
    {
        "id": "fivethree",
        "url": "5-3.jpg",
        "name": "5-3 李昇翰",
        "tag": [
            "直率",
            "好溝通",
            "消失半年的男人"
	],
        "future": "我要當交易員賺大錢，坑殺散戶，每天泡在鈔票裡面洗澡（喂，其實找份可以溫飽養家的投信投顧研究類工作，幸福的和我的愛人一起生活我就滿足了。",
        "learned": "覺得遇到一群很有熱情，也很有自己想法的人！覺得大家未來都會很順利的！",
        "facebook":"https://www.facebook.com/wxes9313439",
        "email":"b05607013@ntu.edu.tw"
    },
    {
        "id": "fivefour",
        "url": "5-4.jpg",
        "name": "5-4 呂宜學",
        "tag": [
            "行銷組",
            "TB 總召",
            "職涯二刷"
	],
        "future": "",
        "learned": "資種的一年間，學到最多的是與人相處以及處理事情的軟實力，同時培養我們獨立思考、自主學習的能力。在這邊除了學習，也得到許多學長姐的幫助，在這邊也會認識一群有趣卻也能互相了解的朋友，明明來自不同學校、科系，卻有著深厚的情感，我想這恐怕是最難能可貴的。",
        "facebook":"https://www.facebook.com/profile.php?id=100000647675278",
        "email":"karta086351312@gmail.com"
    },
    {
        "id": "fivefive",
        "url": "5-5.jpg",
        "name": "5-5 黃筱翎",
        "tag":[
            "吉米控",
            "高階社會人士",
            "工作狂"
	],
        "future": "",
        "learned": "資種的結業當然要寫在資種的收穫，寫未來志向太假掰了啦！在資種說真的認識到一群很棒的人，我從來沒有待過一個沒有抱怨的團體（或是只是我不知道），大家的凱瑞能力堪比本身工作能力，大家只要在一起就是在笑，就算遇到再鳥的事都拍拍彼此肩膀熬過去。這大概是我學到最多的，未來面對很多事情，想到這群一直快（開）樂（車）著的朋友，就會安心的繼續奮鬥下去。",
        "facebook":"https://www.facebook.com/profile.php?id=100012923566344",
        "email":"daphne990321@gmail.com"
    },
    {
        "id": "fivesix",
        "url": "5-6.jpg",
        "name": "5-6 陳渝晴",
        "tag": [
            "公主",
            "智慧",
            "方向感"
	],
        "future": "",
        "learned": "在這一年裡收穫了許多軟硬實力，包括專案管理、溝通技巧、會議記錄、文書處理、行銷技能、繪圖技能⋯⋯等，也認識一群既可以吃喝玩樂，又能聊工作聊夢想、一起成長的夥伴。謝謝在資種認識的每個人、以及遇到的每件事，都讓我成長許多！",
        "facebook":"https://www.facebook.com/yuching.o",
        "email":"yu.ching0035@gmail.com"
    },
    {
        "id": "fiveseven",
        "url": "5-7.jpg",
        "name": "5-7 廖顥軒",
        "tag": [
            "負責",
            "樂觀",
            "想睡覺"
	],
        "future": "工作開心，休假開心，天天開心",
        "learned": "學到熬夜技巧－找人陪你熬夜",
        "facebook":"https://www.facebook.com/profile.php?id=100000563409248",
        "email":"jimmy.liao86@gmail.com"
    }
]


membersData = [
    {

    }
]



module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: [
            './src/scripts/pages/index.js',
            "./src/styles/pages/index.scss"
        ],
        members: [
            './src/scripts/pages/members.js',
            './src/styles/pages/members.scss'
        ],
        project_career: [
            './src/scripts/pages/project_career.js',
            './src/styles/pages/project_career.scss'
        ],
        project_recruit: [
            './src/scripts/pages/project_recruit.js',
            './src/styles/pages/project_recruit.scss'
        ],
        project_tb: [
            './src/scripts/pages/project_tb.js',
            './src/styles/pages/project_tb.scss'
        ],
        project_tuv: [
            './src/scripts/pages/project_tuv.js',
            './src/styles/pages/project_tuv.scss'
        ],
        errorPage: [
            './src/scripts/pages/errorPage.js',
            './src/styles/pages/errorPage.scss'
        ],
    },
    // entry:entries,
    // output: {
    //     filename: 'js/[name].[chunkhash:8].js',
    //     path: __dirname + '/dist'
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/members.html',
            filename: 'members.html',
            chunks: ['members'],
            membersLinks: membersLinks,
        }),
        new HtmlWebpackPlugin({
            template: './src/project_career.html',
            filename: 'project_career.html',
            chunks: ['project_career']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_recruit.html',
            filename: 'project_recruit.html',
            chunks: ['project_recruit']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_tb.html',
            filename: 'project_tb.html',
            chunks: ['project_tb']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_tuv.html',
            filename: 'project_tuv.html',
            chunks: ['project_tuv']
        }),
        new HtmlWebpackPlugin({
            template: './src/errorPage.html',
            filename: 'errorPage.html',
            chunks: ['errorPage']
        }),
    ],
    // plugins: html,
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        // {
        //     test: /\.html$/,
        //     loader: "raw-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。
        // }, 
        {
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
        port: 3000
    }

};