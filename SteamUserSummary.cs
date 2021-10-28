using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace westeam
{
    public class SteamUserSummary
    {
        // 20211026192016
        // https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=77457484FBDA3AA8DC7712891F8F334A&steamids=76561198170048678

        public string steamid { get; set; }
        public int communityvisibilitystate { get; set; }
        public int profilestate { get; set; }
        public string personaname { get; set; }
        public int commentpermission { get; set; }
        public string profileurl { get; set; }
        public string avatar { get; set; }
        public string avatarmedium { get; set; }
        public string avatarfull { get; set; }
        public string avatarhash { get; set; }
        public int lastlogoff { get; set; }
        public int personastate { get; set; }
        public string primaryclanid { get; set; }
        public int timecreated { get; set; }
        public int personastateflags { get; set; }
    }

    public class Response
    {
        public List<SteamUserSummary> players { get; set; }
    }

    /*public class Root
    {
        public Response response { get; set; }
    }*/


}

