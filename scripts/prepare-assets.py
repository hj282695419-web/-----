from PIL import Image, ImageOps
from pathlib import Path
root = Path(__file__).resolve().parent.parent
assets = {
 'portrait': '个人介绍/8436371782a9e8bcf16700cf6b8f5ff5.jpg',
 'probiotic': '可嗨作品导出/益生菌/AI KV图/P.jpg',
 'render': '作品集集合/产品建模渲染.jpg',
 'orange': '可嗨作品导出/创意海报/创意种草海报橙子.jpg',
 'apple': '可嗨作品导出/创意海报/创意种草海报苹果.jpg',
 'banana': '可嗨作品导出/创意海报/创意种草海报香蕉.jpg',
 'mask': '可嗨作品导出/面膜/前夜面膜卖点0608膜布.jpg',
}
for name, source in assets.items():
 im = ImageOps.exif_transpose(Image.open(root / source)).convert('RGB')
 im.thumbnail((1800,2400))
 im.save(root / 'public/assets' / (name+'.webp'), 'WEBP', quality=88)
 print(name, im.size)
