# from django.shortcuts import render
# from rest_framework.decorators import api_view
# from django.http import JsonResponse
# from download.functions.services import download_video

# @api_view(['POST'])
# def urlApi(request):
#     response = {
#         "data": None,
#         "error": None,
#         "statusCode": 1,
#     }
#     try:
#         if request.method == "POST":
#             dataObjs = request.data

#             videoDetails = download_video(dataObjs['url'])
            
#             # If the video was successfully downloaded, return the FileResponse directly
#             return videoDetails
#     except Exception as e:
#         response["data"] = "Something Went Wrong"
#         response["error"] = str(e)
#         return JsonResponse(response, status=500)  # Return error response with status code 500
    
#     return JsonResponse(response)  # Return the response as JsonResponse


from django.shortcuts import render
import json
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse, HttpResponseForbidden
from django.views.decorators.csrf import csrf_exempt
from download.functions.services import download_video

@api_view(['POST'])
def urlApi(request):
    response = {
        "data": None,
        "error": None,
        "statusCode": 1,
    }
    try:
        if request.method == "POST":
            dataObjs = request.data
            print('=========================================')
            print('dataObjs :: ', dataObjs)

            videoDetails = download_video(dataObjs['url'])
            
            response['data'] = videoDetails
            response['statusCode'] = 0

    except Exception as e:
        response["data"] = "Something Went Wrong"
        response["error"] = str(e)
        raise
        
    return JsonResponse(response)
    