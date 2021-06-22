FROM python:3.9

RUN mkdir /app
WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip --no-cache-dir
RUN pip install -r requirements.txt --no-cache-dir
RUN pip install -U https://github.com/tetsuzawa/questplus/archive/master.zip --no-cache-dir

COPY . .

CMD ["python3", "/app/run.py"]