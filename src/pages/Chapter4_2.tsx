function Chapter4_2() {
  return (
    <div>
      <h1>レシピの投稿</h1>

      {/* form: フォーム */}
      <form action='' method='post' encType='multipart/form-data'>
        <p>
          {/* label: ラベルとなるテキストを囲む */}
          <label>
            タイトル（必須項目）
            {/* input: text, password, number, checkbox, radiobutton, dateなど */}
            <input
              type='text'
              name='title'
              placeholder='タイトルを入力'
              required
            />
          </label>
        </p>

        <p>
          {/* label: htmlFor - input: id */}
          <label htmlFor='thumbnail_image'>サムネイル画像</label>
          <input type='file' id='thumbnail_image' name='thumbnail' />
        </p>

        <p>キーワード（複数選択可）</p>
        <ul>
          <li>
            <label>
              <input type='checkbox' name='keywords[]' value='簡単' />
              簡単
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' name='keywords[]' value='お弁当' />
              お弁当
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' name='keywords[]' value='子供向け' />
              子供向け
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' name='keywords[]' value='ダイエット' />
              ダイエット
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' name='keywords[]' value='作り置き' />
              作り置き
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' name='keywords[]' value='節約' />
              節約
            </label>
          </li>
        </ul>

        <p>
          <label>
            カテゴリ
            {/* select: セレクトボックス */}
            <select name='category'>
              <option value='未選択'>-- カテゴリを選択してください --</option>
              <option>ごはん</option>
              <option>パン</option>
              <option>パスタ</option>
              <option>麺</option>
              <option>お肉</option>
              <option>魚介</option>
              <option>揚げ物</option>
              <option>スープ</option>
              <option>サラダ</option>
              <option>大豆加工品</option>
              <option>粉もの</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            投稿内容（必須項目）
            {/* textarea: テキストエリア */}
            <textarea
              name='content'
              cols={50}
              rows={15}
              placeholder='本文を入力'
            ></textarea>
          </label>
        </p>

        <p>
          {/* button: ボタン */}
          <button>投稿する</button>
        </p>
      </form>
    </div>
  )
}

export default Chapter4_2
