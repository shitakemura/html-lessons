function Chapter4_1() {
  return (
    <div>
      <h1>投稿したレシピ一覧</h1>

      {/* table: テーブル */}
      <table>
        {/* thead: table header */}
        <thead>
          {/* tr: table row */}
          <tr>
            {/* th: table header cell */}
            <th>タイトル</th>
            <th>カテゴリ</th>
            <th>公開日</th>
          </tr>
        </thead>
        {/* tbody: table body */}
        <tbody>
          <tr>
            {/* td: table data cell */}
            <td>名店の味を再現！自宅で作る究極のTKG</td>
            <td>ごはん</td>
            <td>
              <time datatype='2022-04-01'>2022年04月01日</time>
            </td>
          </tr>
          <tr>
            <td>超簡単！究極の時短テクニックで作る本格架空ボロネーゼ</td>
            <td>パスタ</td>
            <td>
              <time dateTime='2022-03-28'>2022年03月28日</time>
            </td>
          </tr>
          <tr>
            <td>シンプルにおいしい冷凍讃岐うどん</td>
            <td>麺</td>
            <td>
              <time dateTime='2022-03-27'>2022年03月27日</time>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Chapter4_1
