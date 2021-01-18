let customerListModule = (function () {
	let $tbody = $('tbody');
	let $selectBox = $('.selectBox');
	let $search = $('.searchInp');
	let $pageBox = $('.pageBox');
	let lx = '';
	let limit = 10;
	let page = 1;

	let render = () => {
		let type = $selectBox.val();
		let search = $search.val().trim();
		return axios.get('/customer/list', {
			params: {
				lx,
				type,
				search,
				page,
				limit,
			}
		}).then((res) => {
			let {
				code,
				total,
				totalPage,
				data
			} = res;
			if (code == 0) {
				let str = ``;
				data.forEach((item) => {
					let {
						id,
						name,
						sex,
						email,
						phone,
						QQ,
						weixin,
						type,
						userName,
						address
					} = item;
					str += `<tr data-id="${id}" data-name="${name}">
					<td class="w8">${name}</td>
					<td class="w5">${parseInt(sex) == 1 ? '女' : '男'}</td>
					<td class="w10">${email}</td>
					<td class="w10">${phone}</td>
					<td class="w10">${weixin}</td>
					<td class="w10">${QQ}</td>
					<td class="w5">${type}</td>
					<td class="w8">${userName}</td>
					<td class="w20">${address}</td>
					<td class="w14">
						<a href="customeradd.html?customerId=${id}">编辑</a>
						<a href="javascript:;">删除</a>
						<a href="visit.html?customerId=${id}">回访记录</a>
					</td>
				</tr>`;

				})

				$tbody.html(str);
				let ary = [];
				for (let i = 0; i < totalPage; i++) {
					ary.push(i + 1)
				};

				let str1 = `${page > 1 ? '<a href="javascript:;">上一页</a>' : ''}
				<ul class="pageNum">
			${ary.map((item, index) => {
					return `<li class="${item == page ? 'active' : ''}">${item}</li>`
				}).join('')}
			</ul>
			${totalPage == page ? '' : '<a href="javascript:;">下一页</a>'}`;
				$pageBox.html(str1)
			}
		})
	};
	let bindSeletct = () => {
		$selectBox.on('change', function () {
			render();
		});
		$search.on('keydown', function (e) {
			if (e.keyCode == 13) {
				render()
			}
		})
	};
	let Numselect = () => {
		$('.pageBox').click(function (e) {
			let target = e.target;
			let tarName = target.tagName;
			let content = target.innerText;
			if (tarName == 'A' && content == '上一页') {
				page--;
				render();
			}
			if (tarName == 'A' && content == '下一页') {
				page++;
				render();
			}
			if (tarName == 'LI') {
				page = parseFloat(content);
				render();
			}
		})
	};
	return {
		init() {
			lx = location.href.queryURLParams().lx || 'my';
			render().then((res) => {
				
			})
			bindSeletct();
			Numselect();
		}
	}
})()
customerListModule.init()
