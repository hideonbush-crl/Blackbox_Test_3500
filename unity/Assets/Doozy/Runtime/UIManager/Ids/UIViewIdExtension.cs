// Copyright (c) 2015 - 2022 Doozy Entertainment. All Rights Reserved.
// This code can only be used under the standard Unity Asset Store End User License Agreement
// A Copy of the EULA APPENDIX 1 is available at http://unity3d.com/company/legal/as_terms

//.........................
//.....Generated Class.....
//.........................
//.......Do not edit.......
//.........................

using System.Collections.Generic;
// ReSharper disable All
namespace Doozy.Runtime.UIManager.Containers
{
    public partial class UIView
    {
        public static IEnumerable<UIView> GetViews(UIViewId.MainFlow id) => GetViews(nameof(UIViewId.MainFlow), id.ToString());
        public static void Show(UIViewId.MainFlow id, bool instant = false) => Show(nameof(UIViewId.MainFlow), id.ToString(), instant);
        public static void Hide(UIViewId.MainFlow id, bool instant = false) => Hide(nameof(UIViewId.MainFlow), id.ToString(), instant);
    }
}

namespace Doozy.Runtime.UIManager
{
    public partial class UIViewId
    {
        public enum MainFlow
        {
            added,
            addFriend,
            chatpage,
            listenpage,
            Loading,
            Main,
            Map,
            Musixpage
        }    
    }
}