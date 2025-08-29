const applicantsData = {
  "173563": {
    "personal": {
      "name": "Aarav Sharma",
      "dob": "15/05/1988",
      "gender": "Male",
      "address": "123 Palm Meadows, Bangalore, KA, 560066",
      "mobile": "98XXXXXX01",
      "email": "aarav.s@example.com"
    },
    "employment": {
      "occupation": "Software Engineer",
      "income": "₹ 25,00,000",
      "reportedDate": "18/07/2025"
    },
    "graphImage": "graphs/riskon_static_graph_applicant_173563.0.png",
    "geminiSummary": "The applicant, Aarav Sharma, demonstrates an exceptionally low-risk profile, categorized as 'Low' with a default probability near zero. The payment history is impeccable, with all installments paid significantly ahead of schedule. Financial stability appears very high, and credit behavior is exemplary. This applicant represents a prime candidate for credit extension with minimal associated risk.",
    "history": [
      {"Cohort":2.0,"Applicant_ID":173563.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-5,"Installment_Due":10871.55,"Amount_Paid":10871.55,"Payment_Status":"69 days early","Predicted_Prob_Default":0.0001059},
      {"Cohort":2.0,"Applicant_ID":173563.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-4,"Installment_Due":10871.55,"Amount_Paid":10871.55,"Payment_Status":"69 days early","Predicted_Prob_Default":0.0001149},
      {"Cohort":2.0,"Applicant_ID":173563.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-3,"Installment_Due":10871.55,"Amount_Paid":10871.55,"Payment_Status":"68 days early","Predicted_Prob_Default":0.0001352},
      {"Cohort":2.0,"Applicant_ID":173563.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-2,"Installment_Due":10871.55,"Amount_Paid":10871.55,"Payment_Status":"98 days early","Predicted_Prob_Default":0.0000424},
      {"Cohort":2.0,"Applicant_ID":173563.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-1,"Installment_Due":10871.55,"Amount_Paid":10871.55,"Payment_Status":"97 days early","Predicted_Prob_Default":0.0000879},
      {"Cohort":2.0,"Applicant_ID":173563.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":0,"Installment_Due":10871.55,"Amount_Paid":10871.55,"Payment_Status":"97 days early","Predicted_Prob_Default":0.0001026},
      {"Cohort":2.0,"Applicant_ID":173563.0,"Risk_Category":"Low","Data_Type":"Forecast","Month_Offset":1,"Installment_Due":null,"Amount_Paid":null,"Payment_Status":"N/A","Predicted_Prob_Default":0.0001026}
    ]
  },
  "146353": {
    "personal": { "name": "Priya Singh", "dob": "22/11/1992", "gender": "Female", "address": "45-B, Sector 15, Gurgaon, HR, 122001", "mobile": "99XXXXXX02", "email": "priya.s@example.com" },
    "employment": { "occupation": "Marketing Manager", "income": "₹ 18,50,000", "reportedDate": "12/06/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_146353.0 (1).png",
    "geminiSummary": "Priya Singh presents a very strong credit profile, categorized as 'Low' risk. The predictive model indicates a consistently negligible probability of default. The applicant's payment history is flawless, with every installment paid approximately 11-12 days early. This consistent and responsible financial behavior suggests a high degree of reliability.",
    "history": [
        {"Cohort":2.0,"Applicant_ID":146353.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-12,"Installment_Due":13289.805,"Amount_Paid":13289.805,"Payment_Status":"11 days early","Predicted_Prob_Default":0.0001153},
        {"Cohort":2.0,"Applicant_ID":146353.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-11,"Installment_Due":13289.805,"Amount_Paid":13289.805,"Payment_Status":"12 days early","Predicted_Prob_Default":0.0001153},
        {"Cohort":2.0,"Applicant_ID":146353.0,"Risk_Category":"Low","Data_Type":"Historical","Month_Offset":-1,"Installment_Due":13289.805,"Amount_Paid":13289.805,"Payment_Status":"11 days early","Predicted_Prob_Default":0.0001153}
    ]
  },
   "342618": {
    "personal": { "name": "Rohan Mehta", "dob": "01/02/1985", "gender": "Male", "address": "789 Coral Gables, Mumbai, MH, 400050", "mobile": "97XXXXXX03", "email": "rohan.m@example.com" },
    "employment": { "occupation": "Business Owner", "income": "₹ 45,00,000", "reportedDate": "25/07/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_342618.0.png",
    "geminiSummary": "This applicant, Rohan Mehta, is classified as 'High' risk with a predicted default probability of 97.46%. The historical data reveals a consistent pattern of late payments across multiple installments within the same billing cycle. This behavior indicates significant difficulty in meeting financial obligations in a timely manner, warranting extreme caution.",
    "history": [
        {"Cohort":0.0,"Applicant_ID":342618.0,"Risk_Category":"High","Data_Type":"Historical","Month_Offset":-11,"Installment_Due":11279.52,"Amount_Paid":11279.52,"Payment_Status":"24 days late","Predicted_Prob_Default":0.9745521},
        {"Cohort":0.0,"Applicant_ID":342618.0,"Risk_Category":"High","Data_Type":"Historical","Month_Offset":-11,"Installment_Due":606.69,"Amount_Paid":606.69,"Payment_Status":"18 days late","Predicted_Prob_Default":0.9745521},
        {"Cohort":0.0,"Applicant_ID":342618.0,"Risk_Category":"High","Data_Type":"Forecast","Month_Offset":1,"Installment_Due":null,"Amount_Paid":null,"Payment_Status":"N/A","Predicted_Prob_Default":0.9745521}
    ]
  },
  "172994": {
    "personal": { "name": "Ananya Reddy", "dob": "19/08/1995", "gender": "Female", "address": "Plot 42, Jubilee Hills, Hyderabad, TS, 500033", "mobile": "96XXXXXX04", "email": "ananya.r@example.com" },
    "employment": { "occupation": "Graphic Designer", "income": "₹ 12,00,000", "reportedDate": "05/05/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_172994.0.png",
    "geminiSummary": "Ananya Reddy is categorized as a 'High' risk applicant with a predicted default probability of 86.75%. The available payment history shows a significant delinquency, with a payment made 25 days late and for an amount less than what was due. This single data point is a strong negative indicator, suggesting potential credit instability.",
    "history": [
        {"Cohort":6.0,"Applicant_ID":172994.0,"Risk_Category":"High","Data_Type":"Historical","Month_Offset":-8,"Installment_Due":6546.33,"Amount_Paid":6064.29,"Payment_Status":"25 days late","Predicted_Prob_Default":0.8674746}
    ]
  },
  "234356": {
    "personal": { "name": "Vikram Patel", "dob": "30/03/1980", "gender": "Male", "address": "15, CG Road, Ahmedabad, GJ, 380009", "mobile": "95XXXXXX05", "email": "vikram.p@example.com" },
    "employment": { "occupation": "Architect", "income": "₹ 30,00,000", "reportedDate": "14/02/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_234356.0.png",
    "geminiSummary": "Vikram Patel has a 'Medium' risk profile with a predicted default probability of 67.31%. While some payments are on time, there is a recurring pattern of late payments, ranging from 1 to 5 days past due. This inconsistency suggests a moderate level of financial strain or poor payment discipline, requiring careful consideration before extending further credit.",
    "history": []
  },
  "240211": {
    "personal": { "name": "Sanya Iyer", "dob": "12/07/1998", "gender": "Female", "address": "9, Wallace Garden, Chennai, TN, 600006", "mobile": "94XXXXXX06", "email": "sanya.i@example.com" },
    "employment": { "occupation": "Data Analyst", "income": "₹ 15,00,000", "reportedDate": "29/07/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_240211.0.png",
    "geminiSummary": "Sanya Iyer is classified as a 'Medium' risk applicant. The model predicts a 55.48% probability of default. The payment history shows a mixed but concerning pattern; while some payments are early, there is an instance of a significant 22-day delay. This volatility in payment behavior elevates the applicant's risk profile beyond the low-risk category.",
    "history": []
  },
  "248480": {
    "personal": { "name": "Arjun Kumar", "dob": "05/09/1975", "gender": "Male", "address": "21, Park Street, Kolkata, WB, 700016", "mobile": "93XXXXXX07", "email": "arjun.k@example.com" },
    "employment": { "occupation": "Consultant", "income": "₹ 55,00,000", "reportedDate": "01/04/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_248480.0.png",
    "geminiSummary": "Arjun Kumar represents a 'Low' risk profile, with a predicted default probability of only 1.29%. The payment history is consistently positive, marked by on-time payments. This indicates strong financial health and reliable credit management. The applicant is considered a very safe candidate for lending.",
    "history": []
  },
  "337049": {
    "personal": { "name": "Neha Gupta", "dob": "28/06/1990", "gender": "Female", "address": "B-5, Vasant Kunj, New Delhi, DL, 110070", "mobile": "92XXXXXX08", "email": "neha.g@example.com" },
    "employment": { "occupation": "Doctor", "income": "₹ 40,00,000", "reportedDate": "19/05/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_337049.0.png",
    "geminiSummary": "Neha Gupta is categorized as a 'Low' risk applicant with a minimal predicted default probability of 1.35%. Her payment history is exemplary, with all recorded installments paid on time. This pattern of consistent financial responsibility suggests that the applicant is highly creditworthy.",
    "history": []
  },
  "350711": {
    "personal": { "name": "Aditya Verma", "dob": "11/01/1983", "gender": "Male", "address": "7, Koregaon Park, Pune, MH, 411001", "mobile": "91XXXXXX09", "email": "aditya.v@example.com" },
    "employment": { "occupation": "Project Manager", "income": "₹ 28,00,000", "reportedDate": "03/03/2025" },
    "graphImage": "graphs/riskon_static_graph_applicant_350711.0.png",
    "geminiSummary": "Aditya Verma is assessed as a 'Medium' risk candidate with a 45.69% predicted probability of default. The applicant's payment history is inconsistent, showing both on-time and late payments up to 7 days past due. This variability indicates a moderate risk of future delinquency and should be factored into any credit decision.",
    "history": []
  }
};
