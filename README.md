## You-Are-Worth-It
#Getting Started
<hr>
To get started with Yawi, follow these steps:
1) Clone the repository: git clone https://github.com/YawiRepo/Yawi.git
2) Install dependencies: `npm install` and  `npm install  cors @fortawesome/fontawesome-svg-core @tensorflow/tfjs @tensorflow-models/blazeface` and `pip install uvicorn tensorflow fer scikit-learn opencv-python numpy pandas fastapi`
3) `cd src` and run `node Server.js` to start the main server.
4) `cd src/components` directory and run `uvicorn emotion-detection:app --host  0.0.0.0 --port  8002` and `cd src/pages` and run `uvicorn 
     fastapi_script:app --host 0.0.0.0 --port 8084 --reload` 
5) `cd src/Models` and run `disease.py`
6) Start the development server: `npm start`

Note: Please ensure you have installed nodejs and have the .env file to run the complete application.

