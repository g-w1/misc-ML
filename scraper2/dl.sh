#!/bin/sh

while read i; do
	youtube-dl $i
done < vids.txt
