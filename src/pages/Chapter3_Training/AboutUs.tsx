import kitchenImage from '../../assets/thumbnail-dummy-kitchen.jpg'

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        私たちは<em>架空サイト</em>を作ることに、命を燃やすプロ集団です。
      </p>

      <h2>制作実績</h2>

      <h3>Dummy Kitchen様</h3>
      <p>
        架空の料理レシピサイトである、Dummy
        Kitchen様のWebサイトを制作させて頂きました。
      </p>

      <h4>担当</h4>
      <ul>
        <li>ディレクション</li>
        <li>デザイン</li>
        <li>コーディング</li>
      </ul>

      <figure>
        <img
          src={kitchenImage}
          width='580'
          height='358'
          alt='シンプルなレイアウトでキーカラーのオレンジを適度に使ったDummy Kitchen様のWebサイト'
        />
      </figure>

      <h2>会社情報</h2>
      <p>住所：東京都新宿区市谷左内町２１−１３</p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.2205601477515!2d139.73556507251465!3d35.693545405696995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c5e412329bb%3A0x7db38e6732953dc!2z44CSMTYyLTA4NDYg5p2x5Lqs6YO95paw5a6_5Yy65biC6LC35bem5YaF55S677yS77yR4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1646019011084!5m2!1sja!2sjp'
        title='東京都新宿区市谷左内町２１−１３'
        width='600'
        height='450'
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
      ></iframe>

      <p>
        <small>
          &copy; <time>2022</time>{' '}
          <a href='/chapters/3_Training/contact'>Dummy Creations</a>
        </small>
      </p>
    </div>
  )
}

export default AboutUs
