<script>
  // 検索対象の機能リスト
  // targetId はそれぞれのセクションの id に合わせて変更してください
  const FEATURES = [
    {
      label: "ナビについて",
      keywords: ["ナビ", "概要", "説明"],
      targetId: "about-navi"
    },
    {
      label: "LINE動作デモ",
      keywords: ["動作デモ", "デモ", "LINE"],
      targetId: "line-demo"
    },
    {
      label: "やっちゃダメリスト",
      keywords: ["やっちゃダメ", "注意", "リスト"],
      targetId: "dont-list"
    },
    {
      label: "全国情報コン応募作品として",
      keywords: ["応募作品", "コンテスト", "全国情報コン"],
      targetId: "contest-section"
    },
    {
      label: "アンケート",
      keywords: ["アンケート", "survey", "意見"],
      targetId: "survey-section"
    }
      {
         label: "天気予報",
        keywords: ["天気予報", "天気", "あつさ天気予報"],
        type: "url",
        url: "https://direct-preview-696f30aae788859f27b4043c.monaca.education/"
      }
  ];

  const searchInput = document.getElementById("featureSearchInput");
  const searchButton = document.getElementById("featureSearchButton");
  const messageEl = document.getElementById("featureSearchMessage");

  function searchFeature() {
    const q = (searchInput.value || "").trim().toLowerCase();
    messageEl.textContent = "";

    if (!q) {
      messageEl.textContent = "キーワードを入力してください。";
      return;
    }

    // 部分一致で検索（ラベル or キーワード）
    const hit = FEATURES.find((f) => {
      if (f.label.toLowerCase().includes(q)) return true;
      return f.keywords.some((k) => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()));
    });

    if (!hit) {
      messageEl.textContent = "該当する機能が見つかりませんでした。";
      return;
    }

    const target = document.getElementById(hit.targetId);
    if (!target) {
      messageEl.textContent = `「${hit.label}」の表示場所が見つかりませんでした（id="${hit.targetId}" を確認してください）。`;
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    messageEl.textContent = `「${hit.label}」へ移動しました。`;
    messageEl.style.color = "#16a34a";
  }

  // 🔍ボタンクリック
  searchButton.addEventListener("click", searchFeature);

  // Enterキーでも検索
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchFeature();
    }
  });
</script>
