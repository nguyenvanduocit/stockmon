package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// StockData represents the structure of the response from the API
type StockData struct {
	Data []struct {
		T          string  `json:"t"`
		Fv         float64 `json:"fv"`
		Mav        float64 `json:"mav"`
		Nstv       int     `json:"nstv"`
		Nstp       float64 `json:"nstp"`
		Rsi        float64 `json:"rsi"`
		Macdv      float64 `json:"macdv"`
		Macdsignal string  `json:"macdsignal"`
		Tsignal    string  `json:"tsignal"`
		Avgsignal  string  `json:"avgsignal"`
		Cp         float64 `json:"cp"`
		// Add the rest of the fields as per your requirement
	} `json:"data"`
}

// fetchStockData fetches the stock data for the given symbol
func (a *App) FetchStockData(stockSymbol string) (*StockData, error) {
	url := fmt.Sprintf("https://apipubaws.tcbs.com.vn/stock-insight/v1/stock/second-tc-price?tickers=%s", stockSymbol)

	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var stockData StockData
	err = json.Unmarshal(body, &stockData)
	if err != nil {
		return nil, err
	}

	return &stockData, nil
}
