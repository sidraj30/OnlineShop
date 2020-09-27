#Assuming the words are provided in a text file with one word in one line
file1 = open('words.txt', 'r')
listOfWords = file1.readlines()
words = []

#Assuming tweets are provided in a text file with one tweet per line
file2 = open('tweets.txt', 'r') 
listOfLines = file2.readlines() 
lines = []

#Removing '\n' from words and making a list of words
for word in listOfWords:
    words.append(word.rstrip('\n'))

#Removing '\n' from sentences and making a list of tweets
for line in listOfLines:
    lines.append(line.rstrip('\n'))

#To store the degree of profanity of all tweets
degree = []

#Taking one line at a time from the list of tweets
for line in lines:
    #Converting the sentence in set form to remove redundant words
    lineAsSet = set(line.split(' '))
    #Using intersection property of set to find common elements from set and list of words
    intersection = lineAsSet.intersection(words)
    degree.append(len(intersection))
    
#Displaying degree and tweet together
for i in range(0, len(lines)):
    print(lines[i], ":", degree[i])
 