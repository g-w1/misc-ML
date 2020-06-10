#!/bin/sh

while read i; do
	wget $i
done < pdfs.txt
