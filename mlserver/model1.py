# -- coding: utf-8 --
"""Model.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1y74ASknwnBXHQ75sRfB_PIJrsd1EjH5O
"""

# Commented out IPython magic to ensure Python compatibility.
import numpy as np
from pprint import pprint
import pandas as pd
from sklearn.pipeline import Pipeline as p
from sklearn.svm import SVC
import pickle

np.random.seed(42)

from sklearn.model_selection import train_test_split as tts
from sklearn.model_selection import ShuffleSplit as sss
from sklearn.preprocessing import MinMaxScaler as mms 
from sklearn.pipeline import make_pipeline as mp 
from sklearn.dummy import DummyClassifier
from sklearn.linear_model import SGDClassifier as sgdc, RidgeClassifier as rc, LogisticRegression as lr , LogisticRegressionCV as lrcv
from sklearn.model_selection import cross_validate as cv, RandomizedSearchCV as rscv, cross_val_predict as cvp, GridSearchCV as gscv
from sklearn.metrics import log_loss
from sklearn.metrics import ConfusionMatrixDisplay as cmd 
from sklearn.metrics import precision_score, recall_score, classification_report
from sklearn.metrics import precision_recall_curve as prc 
from sklearn.metrics import roc_curve, roc_auc_score

from scipy.stats import loguniform as lu 

# %matplotlib inline
import matplotlib as mpl 
import matplotlib.pyplot as plt 
import seaborn as sns

mpl.rc('axes',labelsize=14)
mpl.rc('xtick',labelsize=12)
mpl.rc('ytick',labelsize=12)
mpl.rc('figure',figsize=(8,6))

#ignore all warnings (convergence...)
def warn(*args, **kwargs):
  pass
import warnings 
warnings.warn = warn

'''from google.colab import files
 
 
uploaded = files.upload()'''

import io
 
wp = pd.read_csv('E:\RBMS\mlserver\water_potability_1.csv')
print(wp)

f=wp.loc[:,wp.columns!='Potability'].values
l=wp.loc[:,'Potability'].values

'''mms = mms()
f = mms.fit_transform(f)'''

np.random.seed(306)

cv = sss(n_splits=10,test_size=0.2,random_state=42)

train_f, test_f, train_l, test_l = tts(f,l,test_size=0.2,random_state=42)
#train_f, dev_f, train_l, dev_l = tts(train_f,train_l,random_state=42)

from sklearn.ensemble import RandomForestClassifier
model3 = RandomForestClassifier(random_state = 24, n_jobs = -1)
model3.fit(train_f, train_l)
# model3.predict(test_f)
# Saving model to disk
pickle.dump(model3, open('model1.pkl','wb'))

# Loading model to compare the results
model1= pickle.load(open('model1.pkl','rb'))
print(model1.predict(test_f))
