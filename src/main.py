LYRICS_PATH = r"/Users/earlybird/Repos/watch-yo-profamity/lyrics/doja.txt"

lyrics = {}
flat_list = []

# Need to make a lyrics object
# for now it can just return yes or no based on if the list contains a banished word.

with open(LYRICS_PATH, 'r') as f:
    flat_list=[word for line in f for word in line.split()]

