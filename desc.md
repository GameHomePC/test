#Tehnical plan:

- Need create new feature flag **SAFETY_PRODUCT**;

Then go to: 

##1) Project Profile
- Need add new tab **SAFETY** we have example:
https://rakenapp.invisionapp.com/share/GVPR4V3XNTM#/screens/340898938
- Need add new tab **SAFETY** and create routing **{url}/project/{project_id}/safety**;
- We should have plan **Performance** 
https://rakenapp.invisionapp.com/share/GVPR4V3XNTM#/screens/340898937
we can use information from **"/src/stores/ui/Authorization.js"** file for check plan.
- about structure project

**For talks we have 3 tabs: (all|completed|scheduled):**

**https://rakenapp.invisionapp.com/d/main#/console/16318797/340901087/preview**

**GET https://{url}/safety/{projectUuid}/talks**

##### Params:
 - searchString - text
 - tab - **all|completed|scheduled**
 - sortName - name column
 - page - number the page
 - limit - count talks
 - include - ????

**ALL:**

    {
      "page": {
        "offset": 0,
        "limit": 10,
        "totalElements": 2
      },
      "collection": [
        {
          "id": 134,
          "name": "lorem ipsum1"
        },
        {
          "id": 135,
          "name": "lorem ipsum2"
        }
      ]
    }

**COMPLETED:**

    {
      "page": {
        "offset": 0,
        "limit": 10,
        "totalElements": 2
      },
      "collection": [
        {
          "id": 134,
          "name": "lorem ipsum1",
          "date": "01-01-17",
          "attendees": [
            {
                id: 1,
                name: "test"
            },
            {
                id: 1,
                name: "test"
            } 
          ]
        },
        {
          "id": 135,
          "name": "lorem ipsum1",
          "date": "01-01-17",
          "attendees": []
        }
      ]
    }

**SCHEDULED:**

    {
      "page": {
        "offset": 0,
        "limit": 10,
        "totalElements": 2
      },
      "collection": [
        {
            "id": 1340,
            "scheduleDate": "01/10/2018",
            "project": {
                "id": 14100,
                "uuid": "15907744-f618-4f85-bccb-386ec30be3a3",
                "name": "Project name here 1"
            },
            "talk": {
                "id": "135",
                "name": "talk namehere"
            },
            "status": "INCOMPLETE"
        },
        {
            "id": 1341,
            "scheduleDate": "01/10/2018",
            "project": {
                "id": 14101,
                "uuid": "9d3baeca-bdaa-489e-8e79-bc332cc3ab6d",
                "name": "Project name here 2"
            },
            "talk": {
                "id": "135",
                "name": "talk namehere"
            },
            "status": "COMPLETED",
            "completionDates": [
                "01/10/2018",
                "02/10/2018"
            ]
        }
      ]
    }






