import os

ext = input("Enter a file extension: ")
directory = "./"
count = 1


for filename in os.listdir(directory):

	f = os.path.join(directory, filename)
	if os.path.isfile(f) and f != "./renamer.py":
		os.rename(f, "img" + str(count) + str(ext))
		count += 1
