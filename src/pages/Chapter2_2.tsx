function Chapter2_2() {
  return (
    <div>
      <h1>絶対に失敗しない架空のからあげ</h1>
      <p>
        絶対に失敗しない最高においしい架空のからあげの作り方がわかったのでみなさんに共有します。とっても簡単ですが
        <strong>架空のからあげなので絶対に真似しないでくださいね。</strong>
      </p>

      <h2>材料(2人分)</h2>
      {/* ul: 順不同リスト */}
      <ul>
        {/* li: リスト項目 */}
        <li>鶏もも肉 300g</li>
        <li>片栗粉 適量</li>
        <li>サラダ油 適量</li>
        <li>しょうゆ 大さじ1</li>
        <li>おろしにんにく 1片</li>
        <li>おろししょうが 1片</li>
      </ul>

      <h2>作り方</h2>
      {/* ol: 番号順リスト */}
      <ol>
        <li>
          袋に一口サイズに切った鶏肉としょうゆとおろしにんにく、おろししょうがを入れてよく揉み込む
        </li>
        <li>ボウルに片栗粉を入れ、鶏肉としっかりと絡める</li>
        <li>180℃に熱した油で4〜5分揚げる</li>
        <li>お皿に盛り付けて完成</li>
      </ol>

      <h2>このレシピに関するよくある質問</h2>
      {/* dl(description list): 説明リスト */}
      <dl>
        {/* dt(description list term): 説明リストの項目 */}
        <dt>おろしにんにくはチューブタイプでもいいですか？</dt>
        {/* dd(description list description): 説明リストの説明 */}
        <dd>はい、チューブタイプでも大丈夫です。</dd>
        <dt>鶏もも肉はどこで購入できますか？</dt>
        <dd>お近くのスーパーマーケットなどでお買い求め下さい。</dd>
      </dl>
    </div>
  )
}

export default Chapter2_2
