import logo from '../assets/logo-dummy-kitchen.svg'
import karaage from '../assets/karaage.jpg'
import fly from '../assets/fly.jpg'
import fly_webm from '../assets/fly.webm'
import fly_mp4 from '../assets/fly.mp4'

function Chapter3_2() {
  return (
    <div>
      <p>
        <a href='#!'>
          {/* image: 画像 */}
          <img src={logo} width='240' height='48' alt='Dummy Kitchen' />
        </a>
      </p>
      <p>架空の絶品料理レシピサイト</p>

      <ul>
        <li>
          <a href='#!'>レシピを探す</a>
        </li>
        <li>
          <a href='#!'>料理を学ぶ</a>
        </li>
        <li>
          <a href='#!'>コラムを読む</a>
        </li>
        <li>
          <a href='#!'>ログイン</a>
        </li>
        <li>
          <a href='#!'>無料会員登録</a>
        </li>
      </ul>

      <h1>絶対に失敗しない架空のからあげ</h1>
      <p>
        <img
          src={karaage}
          width='840'
          height='520'
          alt='揚げたてのからあげをお皿に盛り付けて、パセリを添えるとより美味しそうに見えますよ'
        />
      </p>
      <ul>
        <li>
          <a href='#ingredients'>材料</a>
        </li>
        <li>
          <a href='#directions'>作り方</a>
        </li>
        <li>
          <a href='#faq'>よくある質問</a>
        </li>
        <li>
          <a href='#comments'>コメント</a>
        </li>
      </ul>

      <p>
        絶対に失敗しない最高においしい架空のからあげの作り方がわかったのでみなさんに共有します。とっても簡単ですが
        <strong>架空のからあげなので絶対に真似しないでくださいね。</strong>
      </p>

      <h2 id='ingredients'>材料（2人分）</h2>
      <ul>
        <li>鶏もも肉 300g</li>
        <li>片栗粉 適量</li>
        <li>サラダ油 適量</li>
        <li>しょうゆ 大さじ1</li>
        <li>おろしにんにく 1片</li>
        <li>おろししょうが 1片</li>
      </ul>

      <h2 id='directions'>作り方</h2>
      <ol>
        <li>
          袋に一口サイズに切った鶏肉としょうゆとおろしにんにく、おろししょうがを入れてよく揉み込む
        </li>
        <li>ボウルに片栗粉を入れ、鶏肉としっかりと絡める</li>
        <li>
          {/* video: 動画 */}
          <video controls playsInline poster={fly} width='400' height='400'>
            <source src={fly_webm} type='video/webm' />
            <source src={fly_mp4} type='video/mp4' />
          </video>
          180℃に熱した油で4〜5分揚げる
        </li>
        <li>お皿に盛り付けて完成</li>
      </ol>

      <h2 id='faq'>このレシピに関するよくある質問</h2>
      <dl>
        <dt>おろしにんにくはチューブタイプでもいいですか？</dt>
        <dd>はい、チューブタイプでも大丈夫です。</dd>
        <dt>鶏もも肉はどこで購入できますか？</dt>
        <dd>お近くのスーパーマーケットなどでお買い求め下さい。</dd>
      </dl>

      <h2 id='comments'>コメント</h2>

      <p>
        <a href='#top'>このページの先頭に戻る</a>
      </p>
    </div>
  )
}

export default Chapter3_2
