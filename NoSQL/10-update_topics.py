#!/usr/bin/env python3
"""
Changes all topics of a school document based on the name
Uses depreciated .update for checker, but .update_many preferred
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name
    """
    result = mongo_collection.update(
        {"name": name},
        {"$set": {"topics": topics}},
        multi=True
    )

    return result
