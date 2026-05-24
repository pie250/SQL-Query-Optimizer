from app.services.mongo import users_collection
from app.utils.hash import hash_password, verify_password
from app.utils.jwt_handler import create_access_token


def signup_user(user):

    existing = users_collection.find_one({
        "email": user.email
    })

    if existing:
        return {
            "success": False,
            "message": "Email already registered"
        }

    hashed = hash_password(user.password)

    users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed
    })

    return {
        "success": True,
        "message": "Signup successful"
    }


def login_user(user):

    existing = users_collection.find_one({
        "email": user.email
    })

    if not existing:
        return {
            "success": False,
            "message": "User not found"
        }

    valid = verify_password(
        user.password,
        existing["password"]
    )

    if not valid:
        return {
            "success": False,
            "message": "Invalid password"
        }

    token = create_access_token({
        "email": existing["email"]
    })

    return {
        "success": True,
        "message": "Login successful",
        "token": token,
        "user": {
            "name": existing["name"],
            "email": existing["email"]
        }
    }