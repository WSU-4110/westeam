using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;



namespace westeam
{
    //Test Class for data
    public class TestData
    {
        public string Id { get; set; }
        public string Name { get; set; }

    }

    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        //Start backend coding here!

        //Create instance of Http client
        static HttpClient client = new HttpClient();

        //initializes the HttpClient instance
        static async Task RunAsync()
        {
            // Update port # in the following line.
            client.BaseAddress = new Uri("http://localhost:64195/");

            //Sets the Accept header to "application/json". Setting this header tells the server to send data in JSON format.
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

        }

        //Send a GET request to retrieve data from steam API
        static async Task<TestData> GetDataAsync(string path)
        {
            TestData data = null;
            HttpResponseMessage response = await client.GetAsync(path);
            if (response.IsSuccessStatusCode)
            {
                data = await response.Content.ReadAsAsync<TestData>();
            }
            return data;
        }

        void runtest()
        {
            var testCall = GetDataAsync("https://store.steampowered.com/api/appdetails?appids=49520");
        }
        
    }
}