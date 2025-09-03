import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# ----------------------------
# 1. Dummy loan dataset (you can replace with Kaggle data if you have time)
# ----------------------------
data = {
    "income": [25000, 40000, 15000, 50000, 10000, 35000, 20000, 45000],
    "expenses": [10000, 20000, 12000, 25000, 9000, 15000, 18000, 20000],
    "loan_amount": [5000, 10000, 3000, 15000, 2000, 12000, 4000, 8000],
    "age": [25, 35, 22, 40, 30, 28, 27, 36],
    "defaulted": [0, 0, 1, 0, 1, 0, 1, 0]  # 0 = repaid, 1 = defaulted
}

df = pd.DataFrame(data)

# ----------------------------
# 2. Features & target
# ----------------------------
X = df[["income", "expenses", "loan_amount", "age"]]
y = df["defaulted"]

# ----------------------------
# 3. Train-test split
# ----------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42)

# ----------------------------
# 4. Random Forest Model
# ----------------------------
model = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
model.fit(X_train, y_train)

# ----------------------------
# 5. Predictions & Evaluation
# ----------------------------
y_pred = model.predict(X_test)

print("✅ Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# ----------------------------
# 6. Example prediction (new applicant)
# ----------------------------
new_applicant = [[30000, 12000, 5000, 29]]  # [income, expenses, loan, age]
decision = model.predict(new_applicant)[0]
print("\n🔮 New Applicant Decision:", "Approved" if decision == 0 else "Rejected")
