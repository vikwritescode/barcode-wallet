# Barcode Wallet
This is a barcode wallet application I'm writing on my own. It's for storing barcodes that I come across in my day to day life which I may need. Currently live at https://vikwritescode.github.io/barcode-wallet. 

## Why would you need to store barcodes?
As it turns out, companies love writing useless code. From airlines to a certain large supermarket chain, all of these companies expect you to download their poorly written apps just to display barcodes for scanning. This is quite inefficient and wastes space and battery life. **Not everything needs to be an app**.

## So, what's this for?
This react project allows me to store data, and generates barcodes from this data. This way, instead of having 6 badly designed apps, you'll only have 1 (with the added bonus of this one not spying on you). Currently it isn't particularly useful, with no ability to extract barcodes from images. Still, these are features I intend to implement. 

## Can I store data?
Yes. This uses localStorage to store your data. It is not encrypted, so storing super sensitive information in this program isn't recommended. Usually, if you clear your browser data all your stuff will disappear. May or may not implement login depending on if I bother to make a backend.
