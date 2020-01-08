export class MenuConfig {
	public defaults: any = {
		aside: {
			self: {},
			items: [
				{
					title: 'Upload File',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/kt-login__form',
					bullet: 'dot',
				},
				{
					title: 'kt-login',
					root: true,
					icon: 'flaticon2-expand',
					page: '/kt-login'
				}
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
