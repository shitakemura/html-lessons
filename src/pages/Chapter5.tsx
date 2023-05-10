import logo from '../assets/logo-dummy-kitchen.svg'

function Chapter5() {
  return (
    <div>
      {/* header: */}
      <header>
        <h1>
          <a href='#!'>
            <img
              src={logo}
              width='240'
              height='48'
              alt='Dummy Kitchen'
              decoding='async'
            />
          </a>
        </h1>
        <p>架空の絶品料理レシピサイト</p>

        {/* nav: ナビゲーション */}
        <nav>
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
        </nav>
      </header>

      {/* main */}
      <main>
        {/* section: 一般的なセクション */}
        <section>
          <h2>Pick Up</h2>

          {/* article: ブログ、ニュース記事などの独立したセクション */}
          <article>
            <header>
              <h3>絶対に失敗しない架空のからあげ</h3>
              <p>
                <time dateTime='2022-03-22'>2022.03.22</time>
              </p>
            </header>
            <p>
              生姜&amp;ニンニクをたっぷり使い下味をしっかりつけた鶏もも肉のからあげです。2度揚げすることで外はカリッと中はジューシーで
              <em>ビールとの</em>相性もバッチリですよ。
            </p>
            <footer>
              <p>かな</p>
            </footer>
          </article>

          <article>
            <header>
              <h3>ごはんが進むイカと大葉のバター醤油炒め</h3>
              <p>
                <time dateTime='2022-02-19'>2022.02.19</time>
              </p>
            </header>
            <p>
              ぷりぷりのイカに大葉がアクセントになって、ごはんが
              <em>何杯でも</em>
              食べられる逸品です！お弁当に入れても、おつまみとしてもその役割を全うします。
            </p>
            <footer>
              <p>斎藤 あかね</p>
            </footer>
          </article>
        </section>

        <section>
          <h2>新着の絶品架空レシピ</h2>
          <p>最近投稿された絶品レシピをご紹介。</p>

          <article>
            <header>
              <h3>名店の味を再現！自宅で作る究極のTKG</h3>
              <p>
                <time dateTime='2022-04-01'>2022.04.01</time>
              </p>
            </header>
            <p>
              架空のたまごかけご飯専門店「だみい屋」さんのTKGを<em>家庭で</em>
              再現してみました。隠し味のごま油がワンランク上のTKGに仕上げてくれます。
            </p>
            <footer>
              <p>さくら</p>
            </footer>
          </article>
        </section>
      </main>

      {/* aside: 補足的なセクション */}
      <aside>
        <h2>スポンサー</h2>
        <p>当架空サイトは下記のスポンサー様のお力で運営しております。</p>
        <ul>
          <li>
            <a href='' target='_blank'>
              技術評論社（新しいタブで開く）
            </a>
          </li>
          <li>
            <a href='' target='_blank'>
              Shibajuku（新しいタブで開く）
            </a>
          </li>
        </ul>
      </aside>

      {/* footer */}
      <footer>
        <address>
          <p>
            Dummy Kitchenへのお問い合わせは、
            <a href=''>お問い合わせフォーム</a>
            か下記の住所宛にご連絡下さい。
          </p>
          <p>
            〒100-XXXX
            <br />
            東京都架空区架空町1-2-3-2001
          </p>
        </address>

        <p>
          <small>
            &copy; <time>2022</time> Dummy Kitchen
          </small>
        </p>
      </footer>
    </div>
  )
}

export default Chapter5
