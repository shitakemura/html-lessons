import logo from '../assets/logo-dummy-creations.svg'

function Chapter5_Training() {
  return (
    <div>
      <header>
        <h1>
          <a href='#!'>
            <img
              src={logo}
              width='323'
              height='32'
              alt='Dummy Creations'
              decoding='async'
            />
          </a>
        </h1>

        <nav>
          <ul>
            <li>
              <a href='#!'>About Us</a>
            </li>
            <li>
              <a href='#!'>Service</a>
            </li>
            <li>
              <a href='#!'>Works</a>
            </li>
            <li>
              <a href='#!'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <p>
          私たちは<em>架空サイト</em>を作ることに、命を燃やすプロ集団です。
        </p>

        <section>
          <h2>最新の制作実績</h2>

          <article>
            <h3>Dummy Kitchen様</h3>
            <p>
              架空の料理レシピサイトである、Dummy
              Kitchen様のWebサイトを制作させて頂きました。
            </p>
            <section>
              <h4>担当</h4>
              <ul>
                <li>ディレクション</li>
                <li>デザイン</li>
                <li>コーディング</li>
              </ul>
            </section>
          </article>

          <article>
            <h3>Dummy Cafe様</h3>
            <p>
              架空のカフェ、Dummy Cafe様のWebサイトを制作させて頂きました。
            </p>
            <section>
              <h4>担当</h4>
              <ul>
                <li>ディレクション</li>
                <li>デザイン</li>
                <li>コーディング</li>
              </ul>
            </section>
          </article>

          <p>
            <a href='#!'>すべての制作実績を見る</a>
          </p>
        </section>
      </main>
      <footer>
        <ul>
          <li>
            <a href='#!'>プライパシーポリシー</a>
          </li>
          <li>
            <a href='#!'>サイトマップ</a>
          </li>
        </ul>
        <address>
          <p>
            Dummy Creationsへのお問い合わせは、
            <a href='#!'>お問い合わせフォーム</a>よりお願い致します。
          </p>
        </address>
        <p>
          <small>
            &copy; <time>2022</time> <a href='#!'>Dummy Creations</a>
          </small>
        </p>
      </footer>
    </div>
  )
}

export default Chapter5_Training
