for archivo in *.json; do
  mv "$archivo" "${archivo%.txt}.js"
done
