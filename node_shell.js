const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'fd597738-2e1b-4fe2-ae28-ccb58fd14031'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
