import damiiiyaLogo from '../assets/logo-damiiya.svg'
import tkgPhoto from '../assets/photo-tkg.jpg'
import damitamaPhoto from '../assets/photo-damitama.jpg'
import kakuuPhoto from '../assets/photo-kakuu.jpg'
import kuusouPhoto from '../assets/photo-kuusou.jpg'

function Practice() {
  return (
    <div>
      <header>
        <h1>
          <a href='#!'>
            <img
              src={damiiiyaLogo}
              width='104'
              height='128'
              alt='たまごかけご飯のだみい屋'
              decoding='async'
            />
          </a>
        </h1>

        <nav>
          <ul>
            <li>
              <a href='#commitment'>こだわり</a>
            </li>
            <li>
              <a href='#menu'>お品書き</a>
            </li>
            <li>
              <a href='#access'>アクセス</a>
            </li>
            <li>
              <a href='#reserve'>ご予約</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <p>
          たまごと、<em>きみ</em>に溺れる時がきた。
        </p>
        <figure>
          <img src={tkgPhoto} width='720' height='553' decoding='async' />
        </figure>

        <section>
          <h2>お知らせ</h2>
          <dl>
            <dt>
              <time dateTime='2022-04-02'>2022.04.02</time>
            </dt>
            <dd>本日の卵かけご飯は終了いたしました。</dd>
            <dt>
              <time dateTime='2022-03-30'>2022.03.30</time>
            </dt>
            <dd>明日は臨時休業させて頂きます。</dd>
            <dt>
              <time dateTime='2022-03-25'>2022.03.25</time>
            </dt>
            <dd>Webサイトをリニューアルしました</dd>
          </dl>
        </section>

        <section id='commitment'>
          <h2>こだわり</h2>
          <p>
            だみい屋は、架空のたまごかけご飯専門店です。たまごかけご飯に合うたまご、お米、醤油を探し続け、ついに自信を持ってご提供できるたまごかけご飯が完成しました。当店にはたまごかけご飯しかありませんが、厳選した素材のみを使った架空のたまごかけご飯がここにあります。
          </p>
        </section>

        <section id='menu'>
          <h2>お品書き</h2>
          <p>
            3種類のたまごをご用意しています。厳選したたまごを使った架空のTKGをご賞味ください。
          </p>
          <article>
            <h3>だみたま</h3>
            <figure>
              <img
                src={damitamaPhoto}
                width='284'
                height='219'
                alt='熱々ごはんの上にだみたまをかけて、ネギと鰹節をトッピング。'
                decoding='async'
              />
            </figure>
            <p>黄身がとっても濃厚な一番人気の架空のたまご</p>
            <p>
              ¥ 800<small>（税込み）</small>
            </p>
          </article>
          <article>
            <h3>かくうの卵</h3>
            <figure>
              <img
                src={kakuuPhoto}
                width='284'
                height='219'
                alt='熱々ごはんの上にかくうの卵をかけて、ネギと鰹節をトッピング。'
                decoding='async'
              />
            </figure>
            <p>甘みとコクがクセになる架空のたまご</p>
            <p>
              ¥ 800<small>（税込み）</small>
            </p>
          </article>
          <article>
            <h3>くうそう卵</h3>
            <figure>
              <img
                src={kuusouPhoto}
                width='284'
                height='219'
                alt='熱々ごはんの上にくうそう卵をかけて、ネギと鰹節をトッピング。'
                decoding='async'
              />
            </figure>
            <p>濃厚な味わいで栄養価も高い空想のたまご</p>
            <p>
              ¥ 800<small>（税込み）</small>
            </p>
          </article>
        </section>

        <section id='access'>
          <h2>アクセス</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.2205601477515!2d139.73556507251465!3d35.693545405696995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c5e412329bb%3A0x7db38e6732953dc!2z44CSMTYyLTA4NDYg5p2x5Lqs6YO95paw5a6_5Yy65biC6LC35bem5YaF55S677yS77yR4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1646019011084!5m2!1sja!2sjp'
            title='東京都新宿区市谷左内町２１−１３'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
          />

          <dl>
            <dt>所在地</dt>
            <dd>
              〒100-XXXX
              <br />
              東京都架空区架空町1-2-1
            </dd>
            <dt>道順</dt>
            <dd>
              <ol>
                <li>地下鉄架空線架空駅を下車</li>
                <li>南改札口を出て、架空通りを東に500mほど直進</li>
                <li>右手に当店の看板が見えたら到着</li>
              </ol>
            </dd>
          </dl>
          <p>
            <strong>当店に駐車場はありません。</strong>
          </p>

          <table>
            <caption>今週の予約状況</caption>
            <thead>
              <tr>
                <th></th>
                <th scope='col'>
                  <time dateTime='2022-04-03'>4/3（日）</time>
                </th>
                <th scope='col'>
                  <time dateTime='2022-04-04'>4/4（月）</time>
                </th>
                <th scope='col'>
                  <time dateTime='2022-04-05'>4/5（火）</time>
                </th>
                <th scope='col'>
                  <time dateTime='2022-04-06'>4/6（水）</time>
                </th>
                <th scope='col'>
                  <time dateTime='2022-04-07'>4/7（木）</time>
                </th>
                <th scope='col'>
                  <time dateTime='2022-04-08'>4/8（金）</time>
                </th>
                <th scope='col'>
                  <time dateTime='2022-04-09'>4/9（土）</time>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>
                  <time>11:00</time>
                </th>
                <td>空なし</td>
                <td>空なし</td>
                <td>空なし</td>
                <td>空あり</td>
                <td>空なし</td>
                <td>定休日</td>
                <td>空なし</td>
              </tr>
              <tr>
                <th scope='row'>
                  <time>12:00</time>
                </th>
                <td>空なし</td>
                <td>空なし</td>
                <td>空なし</td>
                <td>空あり</td>
                <td>空あり</td>
                <td>定休日</td>
                <td>空なし</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id='reserve'>
          <p>
            <strong>当店は完全予約制です。</strong>
            下記の予約フォームよりご予約の上ご来店下さい。
          </p>

          <form action='' method='post'>
            <p>
              <label>
                お名前（必須項目）
                <input
                  type='text'
                  name='name'
                  placeholder='架空 太郎'
                  required
                />
              </label>
            </p>
            <p>
              <label>
                フリガナ（必須項目）
                <input
                  type='test'
                  name='furigana'
                  placeholder='カクウ タロウ'
                  required
                />
              </label>
            </p>
            <p>
              <label>
                メールアドレス（必須項目）
                <input
                  type='email'
                  name='email'
                  placeholder='kakuu@example.com'
                  required
                />
              </label>
            </p>
            <p>
              <label>
                電話番号（必須項目）
                <input
                  type='tel'
                  name='tel'
                  placeholder='000-0000-0000'
                  required
                />
              </label>
            </p>
            <p>
              <label>
                ご予約日（必須項目）
                <input type='date' name='date' required />
              </label>
            </p>
            <p>
              <label>
                ご予約時間（必須項目）
                <input type='time' name='time' required />
              </label>
            </p>
            <p>
              <label>
                ご予約人数（必須項目）
                <input type='number' name='people' required />
              </label>
            </p>
            <p>
              <label>
                備考（ご要望やお持ちのアレルギーなど）
                <textarea
                  name='note'
                  cols={30}
                  rows={10}
                  placeholder='ネギアレルギーがある'
                />
              </label>
            </p>
            <p>
              <button>予約する</button>
            </p>
          </form>
        </section>
      </main>

      <footer>
        <address>
          <p>
            <a>
              <img
                src={damiiiyaLogo}
                width='104'
                height='128'
                alt='たまごかけご飯のだみい屋'
                decoding='async'
              />
            </a>
          </p>
          <p>
            営業時間：<time>11:00</time> 〜 <time>13:00</time>（金曜日定休日）
          </p>
          <p>お気軽にお問い合わせ下さい。</p>
          <p>
            <a href='tel:000-0000-0000'>000-0000-0000</a>
          </p>
        </address>
        <ul>
          <li>
            <a href='/chapters/privacy-policy'>プライバシーポリシー</a>
          </li>
          <li>
            <a href='https://gihyo.jp/book' target='_blank'>
              運営会社：技術評論社（新しいタブで開く）
            </a>
          </li>
        </ul>
        <p>
          <small>
            &copy; <time>2022</time> だみい屋
          </small>
        </p>
      </footer>
    </div>
  )
}

export default Practice
