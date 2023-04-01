#!/usr/bin/env python
# coding: utf-8

from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
stopwords = set(stopwords.words('english'))
stopwords.update(['I', "I'm",'im', 'st', 'r', 'guys','hey','hello', 'hi'])

import pickle
import gensim
import numpy as np

print("started")
model_path = 'wiki-news-300d-1M.vec'
model = gensim.models.KeyedVectors.load_word2vec_format(model_path, binary=False)
print("embedding model loaded")
clf_model = pickle.load(open('model.sav', 'rb'))
print("clf model loaded")

lemmatizer = WordNetLemmatizer()
categories = ['adhd', 'anxiety', 'depression', 'suicide']

def clean(x):
    x = x.split()
    text = [word.lower() for word in x if word.isalpha() or word == " "]
    text = [word for word in text if word not in stopwords]
    return text

def lemma(x):
    text = [lemmatizer.lemmatize(word) for word in x]
    return text

def compute_average_embedding(word_list):
    total_embedding = np.zeros((300,))
    count = 0
    for word in word_list:
        if word in model:
            total_embedding += model[word]
            count += 1
    if count == 0:
        return np.zeros((300,))
    else:
        return total_embedding / count

def predict_emotion(x):
    x = clean(x)
    x = lemma(x)
    x = compute_average_embedding(x)
    pred = clf_model.predict([x])
    print(clf_model.predict_proba([x]))
    return categories[pred[0]]