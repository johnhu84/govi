07/07/2020
Govi exercise
Exercise

I've set up a test API server for you at --> https://bcore-mock.herokuapp.com

It's a simple REST API that returns JSON data.

Overview
Develop a CLI tool the returns sorted invoice data. The CLI tool should be a continuously running application that stores instance information in-memory. 

The CLI spec is listed below under Step 2

Setup
Create a public Github Repo
Upload your code to the Github repo and treat as if it's going to production (basically, make sure your build folder is populated correctly or explain how to deploy the app in the README)

Step 1

Efficiently query the /invoice resource from within your app.
You may use any library you want
Do not copy/paste code, we want to see you shine with your own approach to reading a REST API
You may want to use caching when appropriate but respect the original TTL

Step 2

Enable the CLI tool to allow the following

goviquery 'invoices' -s 'paidDate' -d "ASC"
goviquery 'invoices' -s 'paidDate' -d "DESC"
goviquery 'amount' -s 'paidDate' -d "ASC"
goviquery 'amount' -s 'paidDate' -d "DESC"

correct:
goviquery 'invoices' -s "paidDate" -d "ASC"
goviquery 'invoices' -s "paidDate" -d "DESC"
goviquery 'invoices' -s "amount' -d "ASC"
goviquery 'invoices' -s "amount" -d "DESC"

Each call should return the data sorted by the field indicated in a format of your choosing.

Step 3

Show an example of piping the data from your new CLI tool to do something interesting. Can be anything, but major points for creativity based on the format you chose in Step 2.

-----------------------------------------


That's it. Once you're done email us back with your github repo url and the commit hash. I'll have someone on the team review it ASAP.