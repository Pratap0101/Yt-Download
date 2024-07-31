import os
from pytube import YouTube
from downloader_api.settings import BASE_DIR

# Function to download a YouTube video in the highest available quality
def download_video(url):
    try:
        # output_path = os.path.join(BASE_DIR, 'download', 'static', 'videos')
        
        # output_path = os.path.join(BASE_DIR, 'media', 'usersVIdeos')
        output_path = "\\var\\www\\3.85.186.42\\assets\\videos\\"

        # print('output_path :: ', os.path.join(BASE_DIR, 'media', 'usersVIdeos'))

        yt = YouTube(url)
        # print('yt :: ', yt.streams)
        stream = yt.streams.get_highest_resolution()

        video_title_with_extension = f"{yt.title}.{stream.mime_type.split('/')[-1]}"

        # print('video_title_with_extension :: ',video_title_with_extension)        

        # print('video_title :: ',video_title)

        stream.download(output_path)

        print('**************************************')
        print("Video downloaded successfully!")

        fullPath = stream.download(output_path)
        fileName = fullPath.split('\\')[-1]

        file_path = f"/videos/{fileName}"
        
        # return {'data':'Y','path' : os.path.join(output_path, stream.download(output_path)),'fileName' : stream.download(output_path)}

        return {'data':'Y','path' : file_path,'fileName' : fileName}

    except Exception as e:
        print(f"Error: {e}")
        raise

# from pytube import YouTube
# from django.http import FileResponse, JsonResponse
# import os
# import re
# from downloader_api.settings import BASE_DIR

# def download_video(url):
#     try:
#         output_path = os.path.join(BASE_DIR, 'download', 'static', 'videos')
#         yt = YouTube(url)
        
#         sanitized_title = re.sub(r'[<>:"/\\|?*]', '_', yt.title)
#         stream = yt.streams.get_highest_resolution()
#         video_path = os.path.join(output_path, f"{sanitized_title}.mp4")

#         # Download the video to the specified path
#         stream.download(output_path)

#         # Check if the file exists after download
#         if os.path.exists(video_path):
#             video_file = open(video_path, 'rb')
#             response = FileResponse(video_file)
#             response['Content-Disposition'] = f'attachment; filename="{sanitized_title}.mp4"'
#             return response
#         else:
#             return JsonResponse({'error': 'Failed to download video'}, status=500)

#     except Exception as e:
#         print(f"Error: {e}")
#         return JsonResponse({'error': 'Failed to download video'}, status=500)

