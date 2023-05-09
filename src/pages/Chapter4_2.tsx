function Chapter4_2() {
  return (
    <div>
      <h1>レシピの投稿</h1>

      {/* form: フォーム */}
      <form action='' method='post' encType='multipart/form-data'>
        <p>
          タイトル（必須項目）
          {/* input: text, password, number, checkbox, radiobutton, dateなど */}
          <input
            type='text'
            name='title'
            placeholder='タイトルを入力'
            required
          />
        </p>

        <p>
          サムネイル画像
          <input type='file' name='thumbnail' />
        </p>

        <p>キーワード（複数選択可）</p>
        <ul>
          <li>
            <input type='checkbox' name='keywords[]' value='簡単' />
            簡単
          </li>
          <li>
            <input type='checkbox' name='keywords[]' value='お弁当' />
            お弁当
          </li>
          <li>
            <input type='checkbox' name='keywords[]' value='子供向け' />
            子供向け
          </li>
          <li>
            <input type='checkbox' name='keywords[]' value='ダイエット' />
            ダイエット
          </li>
          <li>
            <input type='checkbox' name='keywords[]' value='作り置き' />
            作り置き
          </li>
          <li>
            <input type='checkbox' name='keywords[]' value='節約' />
            節約
          </li>
        </ul>

        <p>
          投稿内容（必須項目）
          {/* textarea: テキストエリア */}
          <textarea
            name='content'
            cols={50}
            rows={15}
            placeholder='本文を入力'
          ></textarea>
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
