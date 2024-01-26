As a user, I want the application to fetch real-time data of the stock I specified from a stock market API, so that I can see the current price of the stock.

Scope of Done:  
The application successfully connects to the stock market API.
The application fetches and displays the real-time data of the specified stock.

Conditions of Acceptance (CoA):
Given the application has fetched the real-time data, when the user views the application, then the user should see the current price of the specified stock.
Given the application is unable to fetch the real-time data (due to API failure or invalid stock symbol), when the user views the application, then the user should see an appropriate error message.

===

As a user, I want the application to display the current price of the stock on the user interface in real-time, so that I can monitor the stock price changes.

Scope of Done:  
The application successfully fetches the latest stock price from the stock market API every second.
The application updates the displayed stock price on the user interface every second.

Conditions of Acceptance (CoA):
Given the application is fetching the latest stock price every second, when the user views the application, then the user should see the stock price being updated every second.
Given the application is unable to fetch the latest stock price (due to API failure), when the user views the application, then the user should see an appropriate error message.
