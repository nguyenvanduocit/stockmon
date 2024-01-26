```bash
curl --request GET \
  --url 'https://apipubaws.tcbs.com.vn/stock-insight/v1/stock/second-tc-price?tickers=NAP' \
  --header 'Content-Type: application/json'
```

Response:

```json
{
	"data": [
		{
			"t": "NAP",
			"fv": 0.20,
			"mav": 0.00,
			"nstv": 0,
			"nstp": 0.0,
			"rsi": 60.51569810328953,
			"macdv": 0.18,
			"macdsignal": "Buy",
			"tsignal": "Buy",
			"avgsignal": "Buy",
			"ma20": 10075.0,
			"ma50": 10820.0,
			"ma100": 8076.5,
			"session": 2,
			"mw3d": 10.4,
			"mw1m": 2.9,
			"mw3m": 100.0,
			"mw1y": 58.6,
			"rs3d": 0.0,
			"rs1m": 0.0,
			"rs3m": 0.0,
			"rs1y": 0.0,
			"rsavg": 0.0,
			"hp1m": 13300,
			"hp3m": 13300,
			"hp1y": 13300,
			"lp1m": 8700,
			"lp3m": 5300,
			"lp1y": 5300,
			"hp1yp": -20.3,
			"lp1yp": 100.0,
			"pe": 10.6,
			"pb": 0.9,
			"roe": 0.090317,
			"oscore": 0.0,
			"av": 600,
			"bv": 16000,
			"ev": 19180,
			"hmp": 11600,
			"mscore": 0.02,
			"delta1m": -3.2,
			"delta1y": 52.9,
			"seq": 1706255940,
			"vnid3d": -0.6,
			"vnid1m": 6.1,
			"vnid3m": 5.8,
			"vnid1y": 5.6,
			"cp": 11600.0,
			"vnipe": 14.9138,
			"vnipb": 1.63718
		}
	]
}
```
