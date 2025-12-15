#!/usr/bin/env python3
"""
Gathers stats about Nginx logs stored in MongoDB
"""
import pymongo
from pymongo import MongoClient


def extract_nginx_logs(db_name):
    """
    Gathers stats about Nginx logs stored in MongoDB
    """
    client = MongoClient("mongodb://localhost:27017/")
    db = client[db_name]

    count = db.nginx.count_documents({})
    get_count = db.nginx.count_documents({"method": "GET"})
    post_count = db.nginx.count_documents({"method": "POST"})
    put_count = db.nginx.count_documents({"method": "PUT"})
    patch_count = db.nginx.count_documents({"method": "PATCH"})
    delete_count = db.nginx.count_documents({"method": "DELETE"})
    get_status_count = db.nginx.count_documents(
        {"method": "GET", "path": "/status"}
    )

    print(f"{count} logs")
    print("Methods:")
    print(f"\tmethod GET: {get_count}")
    print(f"\tmethod POST: {post_count}")
    print(f"\tmethod PUT: {put_count}")
    print(f"\tmethod PATCH: {patch_count}")
    print(f"\tmethod DELETE: {delete_count}")
    print(f"{get_status_count} status check")


if __name__ == "__main__":
    extract_nginx_logs("logs")
