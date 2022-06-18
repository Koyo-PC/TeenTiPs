<template>
	<div>
		<Top />
		<Title :data="titleData" />

    <img src="favicon.ico" alt="">

    <div class="profile">
      <h1>桂福丸さんのプロフィール</h1>
      <p>1978年兵庫県神戸市生まれ。灘中学灘高校卒業後、京都大学法学部に進学。2001年卒業。卒業後は英語落語を学び、アメリカでも公演を行う。2007年2月、4代目桂福団治に入門。<br>
      2014年4月には、自身の体験を基にしたビジネス書「怒られ力～新社会人は打たれてナンボ！（明治書院）」を出版。<br>
      「京大宇宙落語会」では、宇宙をテーマにした新作落語を発表している。<br>
      クラシック音楽とのコラボレーションや、B型肝炎の患者の方々に寄り添う活動なども行っている。<br>
      2021年より、小学生向けの落語会「子どもだけ寄席」を開始。ラクゴニンジャというキャラクターの落語解説、じゅげむなどの初めてでも楽しめる演目、太神楽曲芸などの寄席の演芸を合わせて子どもたちに楽しんでもらっている。場内に大人は入れず、入場料は数百円とし、子どもたちが自分のおこづかいで入るというのも特色。子どもたちの自立やお金の勉強の手助けにもなるよう工夫している。</p>

    </div>

    <ol>
      <li><a href="#">なぜ落語家？</a></li>
      <li><a href="#">福丸さんにとっての落語</a></li>
      <li><a href="#">いいいいいいいい</a></li>
      <li><a href="#">ううううううううううう</a></li>
      <li><a href="#">ええええええええええええ</a></li>
      <li><a href="#">おおおおおおおおおおお</a></li>
    </ol>

    <h6>1 of 9</h6>
      
    <img src="favicon.ico" alt="">

    <h1>ママさん宇宙飛行士と呼ばないで</h1>

    <strong>──山崎さんが宇宙飛行士に選ばれたとき、女性の宇宙飛行士は少なかったと思います。当時の世間の目をどう感じていましたか？</strong>

    <p>私は日本人女性としては向井千秋さんに続いて二人目だったので、道を先に切り開いてくれた方がいたのは心強かったです。でも向井さんが初飛行したのが1994年、私が2010年と間があいたこともあり、男性に比べればさまざまな注目を受けました。訓練や宇宙での作業にしても、私自身は性別を意識してなかったのですが、メディアの報道を見ると宇宙飛行士は女性には珍しいことなのかと逆に思っていました。</p>

    <p>また、母親として宇宙に行く女性は日本で初めてだったので、当時は“ママさん宇宙飛行士”と呼ばれることも。そういう表現はできれば避けてくださいとお願いしていました。</p>

    <strong>──ママさん〇〇って、1人で育児を背負ってるようなイメージ……。</strong>

    <p>もちろん背負うこともあるんですけれども、それ以上に支えられることが多い。実際に訓練中や宇宙に行ってる間は子どもと会えないので、その間は家族やチームがサポートしてくれる。みんなで向き合っていることです。</p>

    <h6>2 of 9</h6>



<!--  let titleLisyt = []
 for<textdata : contentsData) {
   if(textdata.h1 != unde) {
     titleLisyt.add({"h1", textdata.h1})
   }eldse if()...
 } -->


	</div>
</template>

<script>
import axios from "axios";

export default {
  name: "tips_test.vue",
  data() {
    return {
      titleData: {"text":"", "sub":"", "date":""},
      // contentsData: [{"h1":""}, {"img":""}, {"name":"", "remark":""}]
    }
  }
  ,
  created: function () {
    axios.get('b.json')
      .then(response => {
        let json = response.data;
        this.titleData = json.title;
        // this.contentsData = json.contents;
        console.log(json.title);
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>

<style>
	html, body {
		width: 100%;
		height: 100%;
		margin: unset;
    /*background-color: rgb(255, 250, 240);*/
    background-color: white;
	}

  /*ol {
    display: block;
    width: 90%;
    margin: 0 auto;
    background-color: gray;
    text-align: center;
    padding-left: 0;
  }
  ol > li {
    text-decoration: none;
    color: white;
    list-style-type: none;
  }
*/

  ol {
    display: block;
    width: 80%;
    margin: 80px auto;
    /*background-color: gray;*/
    list-style-type: dash;
  }
  ol > li {
    color: blue;
  }
  ol > li > a {
    text-decoration: none;
    font-size: 15px;
    line-height: 30px;
    color: black;
    padding-left: 10px;
  }

  

  h6 {
    display: block;
    text-align: center;
    font-size: 15px;
    line-height: 50px;
    border-top: 1px solid black;
    margin: 100px 0 0 0;
  }
  img {
    width: 100%;
    /*height: ;*/
    object-fit: cover;
  }
  h1, strong, p {
    display: block;
    width: 90%;
    margin: 10px auto;
  }
  h1 {
    font-size: 23px;
  }
  strong {
    font-size: 18px;
    /*line-height: 20px;*/
  }
  p {
    margin: 30px auto;
    font-size: 15px;
    line-height: 35px;
  }
</style>
