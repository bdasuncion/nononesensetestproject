Run the app:
    Pre-requisite:
       - Docker
    Steps:
        1. Open a terminal
        2. Navigate to the project base folder. There should be a file docker-compose.yaml
        3. In the terminal, enter the command:
            docker-compose up --build  --force-recreate -d
        4. If the command is succesful, application should be running
        5. To stop the application, enter the command:
            docker-compose down

How to use the app:
    Questions api:
        GET: /questions?category=[category]&answer=[answer]&question=[question]
            - Can be filter based on category, answer and question
        GET: /questions/json/:id
            - Get question details in json format
        POST: /questions
            sample body:
            {
                "question":"<b>English question?</b>",
                "solution": "<i>SOLUTION FOR ANSWER</i>",
                "correctAnswer":"answerC",
                "options":["answerA", "answerB", "answerC"],
                "steps":[{"title":"A", "result":"2", "imageURL":"imageURL1"}, 
                        {"title":"B", "result":"1", "imageURL":"imageURL2"}],
                "imageURL":"AWSBUCKET2",
                "category":"english"
            }
        PUT: questions/:id
                        sample body:
            {
                "question":"<b>English question?</b>",
                "solution": "<i>SOLUTION FOR ANSWER</i>",
                "correctAnswer":"answerC",
                "options":["answerA", "answerB", "answerC"],
                "steps":[{"title":"A", "result":"2", "imageURL":"imageURL1"}, 
                        {"title":"B", "result":"1", "imageURL":"imageURL2"}],
                "imageURL":"AWSBUCKET2",
                "category":"english"
            }
        DELETE: questions/:id
    Categories api:
        GET: /categories
        POST: /categories
            sample body:
                {
                    "name":"category name"
                }
        PUT: /categories/:id
            sample body:
                {
                    "name":"category name"
                }
        DELETE: /categories/:id
    
    While technically a free text field, the [category] field in questions should only be filled with the values that are available in the [name] field in categories. This is to establish some standard on the categories that are available.