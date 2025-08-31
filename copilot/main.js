// fullpage.js 单页照片展示
const photos = [
    'image/photo1.jpeg',
    'image/photo2.jpeg',
    'image/photo3.jpeg'
    // 可继续添加更多图片链接
];

document.addEventListener('DOMContentLoaded', function() {
	// 初始化 fullpage.js
	new fullpage('#fullpage', {
		autoScrolling: true,
		navigation: true,  
		navigationPosition: 'right',
		scrollHorizontally: false
	});

	// 设置每个section的图片
	document.querySelectorAll('.section .photo').forEach((img, idx) => {
		img.src = photos[idx] || '';
		img.alt = photos[idx] ? `照片${idx+1}` : '暂无照片';
	});
});
