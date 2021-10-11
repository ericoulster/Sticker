import re

def generator(path):
    word = " "

    with open(path) as file:
        while True:
            char = file.read(1)
            if char.isspace():
                if word:
                    yield word
                    word = ''
            elif char == '':
                if word:
                    yield word
                break
            else:
                word += char

def cleaner():
    sep = '\t'

    with open("NYSE_list.txt") as file_in:
        lines = []
        for line in file_in:
            res = line.split(sep, 1)[0]
            print(res)
        
        return res
    
if __name__ == '__main__':
    # Instantiate the word generator.
    #words = generator('NYSE_list.txt')

    # Print the very first word.
    #print(next(words))

    # Print the remaining words.
    #for word in words:
    #    print(word)

    res = cleaner()
    